import { Injectable } from "@angular/core";
import { Effect } from "src/app/models/effect";

@Injectable({
  providedIn: "root",
})
export class EffectorService {
  constructor() {}

  effect(file: File, effect: Effect): File {
    return file;
  }
}
