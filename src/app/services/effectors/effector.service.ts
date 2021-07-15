import { Injectable } from "@angular/core";
import * as Rx from "rxjs";
import { mergeMap } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
import { Effect } from "src/app/models/effect/effect";
import { plugins } from "src/app/services/effectors/plugins";

@Injectable({
  providedIn: "root",
})
export class EffectorService {
  constructor() {}

  effect(canvas: Canvas, effect: Effect): Rx.Observable<Canvas> {
    return plugins.resize(canvas, effect).pipe(
      mergeMap((source) => plugins.rotate(source, effect)),
      mergeMap((source) => plugins.text(source, effect)),
      mergeMap((source) => plugins.border(source, effect)),
      mergeMap((source) => plugins.shadow(source, effect))
    );
  }
}
