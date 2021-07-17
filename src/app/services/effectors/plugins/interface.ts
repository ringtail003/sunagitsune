import * as Rx from "rxjs";
import { Canvas } from "src/app/models/canvas/canvas";
import { Effect } from "src/app/models/effect/effect";

export type PluginEffector = (
  source: Canvas,
  effect: Effect
) => Rx.Observable<Canvas>;
