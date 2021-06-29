import * as Rx from "rxjs";

export const rotate = (
  canvas: HTMLCanvasElement
): Rx.Observable<HTMLCanvasElement> => {
  const subject$ = new Rx.Subject<HTMLCanvasElement>();
  const image = new Image();

  image.src = canvas.toDataURL();

  image.onload = () => {
    subject$.next(canvas);
  };

  return subject$.asObservable();
};
