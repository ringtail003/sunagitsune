import { Injectable } from "@angular/core";
import * as Rx from "rxjs";
import { Effect } from "src/app/models/effect";

@Injectable({
  providedIn: "root",
})
export class EffectorService {
  constructor() {}

  effect(file: File, effect: Effect): Rx.Observable<HTMLCanvasElement> {
    const canvas = document.createElement("canvas");

    document.body.append(canvas);
    const image = new Image();
    const subject$ = new Rx.Subject<HTMLCanvasElement>();

    image.src = URL.createObjectURL(file);
    image.onload = () => {
      const iw = image.width;
      const ih = image.height;

      canvas.width = iw + 30; // shadow の15 + α
      canvas.height = ih + 30; // shadow の15 + α

      let context = canvas.getContext("2d");
      context!.drawImage(image, 0, 0, iw, ih);

      // ====================
      // rotate 90
      // ====================
      context = canvas.getContext("2d");
      let cw = canvas.width;
      let ch = canvas.height;
      canvas.width = ch;
      canvas.height = cw;
      cw = canvas.width;
      ch = canvas.height;

      context!.save();
      context!.translate(cw, ch / cw);
      context!.rotate(Math.PI / 2);

      context!.shadowColor = "green";
      context!.shadowBlur = 10;
      context!.shadowOffsetX = 15;
      context!.shadowOffsetY = 15;

      // shadowのために余分を持たせたぶんずらす
      context!.drawImage(
        image,
        0,
        -30,
        canvas.height,
        canvas.width,
        0,
        0,
        canvas.height,
        canvas.width
      );
      context!.restore();

      // ====================
      // border
      // ====================
      // https://stackoverflow.com/questions/23254539/html5-canvas-draw-image-with-inline-border
      context!.beginPath();
      context!.strokeStyle = "#f00"; // some color/style
      context!.lineWidth = 10; // thickness
      context!.strokeRect(0, 0, context!.canvas.width, context!.canvas.height);
      context!.closePath();

      // ====================
      // font
      // ====================
      context!.font = "40pt Arial";
      context!.fillStyle = "red";
      context!.fillText("foobar", 100, 200);

      subject$.next(canvas);
    };

    return subject$.asObservable();
  }
}
