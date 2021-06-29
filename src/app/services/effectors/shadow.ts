import * as Rx from "rxjs";

export const shadow = (url: string, mime: string): Rx.Observable<string> => {
  const subject$ = new Rx.Subject<string>();
  const canvas = document.createElement("canvas");
  const image = new Image();

  image.src = url;

  image.onload = () => {
    canvas.width = image.width + 30;
    canvas.height = image.height + 30;

    const context = canvas.getContext("2d");

    context!.shadowColor = "green";
    context!.shadowBlur = 10;
    context!.shadowOffsetX = 15;
    context!.shadowOffsetY = 15;

    context!.drawImage(image, 0, -30);
    context!.restore();

    subject$.next(canvas.toDataURL(mime, 1));
  };

  return subject$.asObservable();
};
