import * as Rx from "rxjs";

export const resize = (url: string, mime: string): Rx.Observable<string> => {
  const subject$ = new Rx.Subject<string>();
  const canvas = document.createElement("canvas");
  const image = new Image();

  image.src = url;

  image.onload = () => {
    canvas.width = image.width * 0.5; // 1080
    canvas.height = image.height * 0.5; // 688

    const context = canvas.getContext("2d");

    context!.drawImage(image, 0, 0, image.width * 0.5, image.height * 0.5);

    subject$.next(canvas.toDataURL(mime, 1));
  };

  return subject$.asObservable();
};
