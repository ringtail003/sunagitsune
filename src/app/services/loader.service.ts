import { Injectable } from "@angular/core";
import { Effect } from "src/app/models/effect";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  constructor() {}

  load(): Effect {
    return new Effect();
  }

  generateUrl(effect: Effect): string {
    return "http://foobar.com";
  }
}
