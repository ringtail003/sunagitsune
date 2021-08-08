import { Injectable } from "@angular/core";
import * as Rx from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Effect } from "src/app/models/effect/effect";
import {
  EffectMetadata,
  EffectMetadataKey,
} from "src/app/models/effect/effect-metadata";
import { createEffectMetadata } from "src/app/models/effect/factory";

@Injectable({ providedIn: "root" })
export class ConfigService {
  private subject$ = new Rx.ReplaySubject<Effect>(1);

  #metadata: EffectMetadata;

  constructor() {
    this.#metadata = createEffectMetadata();
  }

  patch(metadata: Partial<EffectMetadata>): void {
    Object.entries(metadata).forEach(([key, value]) => {
      this.assign(key as EffectMetadataKey, value);
    });

    this.update();
  }

  watch(options?: { debounce: number }): Rx.Observable<Effect> {
    return this.subject$
      .asObservable()
      .pipe(debounceTime(options?.debounce || 0));
  }

  update(): void {
    this.subject$.next(new Effect(this.#metadata));
  }

  private assign(key: EffectMetadataKey, value: unknown): void {
    if (!Object.keys(this.#metadata).includes(key)) {
      return;
    }
    Object.assign(this.#metadata, { [key]: value });
  }
}
