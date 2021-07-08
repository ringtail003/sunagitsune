import { Injectable } from "@angular/core";
import { EffectMetadata } from "src/app/models/effect/effect-metadata";

@Injectable({ providedIn: "root" })
export class LoaderService {
  load(): Partial<EffectMetadata> {
    return {
      borderWidth: 5,
      borderColor: "#dedede",
    };
  }
}
