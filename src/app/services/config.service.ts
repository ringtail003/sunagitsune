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
  private subject$ = new Rx.Subject<Effect>();
  private observable$: Rx.Observable<Effect>;

  #metadata: EffectMetadata;

  constructor() {
    this.observable$ = this.subject$.asObservable().pipe(debounceTime(1000));
    this.#metadata = createEffectMetadata();
  }

  patch(metadata: Partial<EffectMetadata>): void {
    Object.entries(metadata).forEach(([key, value]) => {
      this.assign(key as EffectMetadataKey, value);
    });

    this.update();
  }

  watch(): Rx.Observable<Effect> {
    return this.observable$;
  }

  update(): void {
    console.log("next");
    this.subject$.next(new Effect(this.#metadata));
  }

  private assign(key: EffectMetadataKey, value: unknown): void {
    if (!Object.keys(this.#metadata).includes(key)) {
      return;
    }
    Object.assign(this.#metadata, { [key]: value });
  }
}
