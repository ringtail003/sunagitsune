import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import * as Rx from "rxjs";
import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { queryStringToObject } from "src/app/utils/query-string-to-object";

@Injectable({ providedIn: "root" })
export class LoaderService {
  #subject$ = new Rx.Subject<Partial<EffectMetadata>>();

  constructor(private location: Location) {
    this.location.onUrlChange((url, state) => {
      if (!state) {
        return;
      }

      this.#subject$.next(queryStringToObject(url.replace("/", "")));
    });
  }

  load(): Rx.Observable<Partial<EffectMetadata>> {
    return this.#subject$.asObservable();
  }
}
