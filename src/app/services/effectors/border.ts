import * as Rx from "rxjs";

export const border = (url: string, mime: string): Rx.Observable<string> => {
  const subject$ = new Rx.Subject<string>();
  const canvas = document.createElement("canvas");
  const image = new Image();

  image.src = url;

  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;

    const context = canvas.getContext("2d");

    context!.drawImage(image, 0, 0);

    context!.beginPath();
    context!.strokeStyle = "#f00";
    context!.lineWidth = 10;
    context!.strokeRect(
      5,
      5,
      context!.canvas.width - 10,
      context!.canvas.height - 10
    );
    context!.closePath();

    subject$.next(canvas.toDataURL(mime, 1));
  };

  return subject$.asObservable();
};
