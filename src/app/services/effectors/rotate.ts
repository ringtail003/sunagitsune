import * as Rx from "rxjs";

export const rotate = (url: string, mime: string): Rx.Observable<string> => {
  const subject$ = new Rx.Subject<string>();
  const canvas = document.createElement("canvas");
  const image = new Image();

  image.src = url;

  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;

    const context = canvas.getContext("2d");

    context!.drawImage(image, 0, 0);

    const [width, height] = [canvas.width, canvas.height];
    canvas.width = height;
    canvas.height = width;

    context!.save();
    context!.translate(height, width / height);
    context!.rotate(Math.PI / 2);

    context!.drawImage(image, 0, 0, canvas.height, canvas.width);
    context!.restore();

    subject$.next(canvas.toDataURL(mime, 1));
  };

  return subject$.asObservable();
};
