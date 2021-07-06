import { Injectable } from "@angular/core";
import * as Rx from "rxjs";
import { debounceTime } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class PreviewUpdater {
  private subject$ = new Rx.Subject<void>();
  readonly observable$: Rx.Observable<void>;

  constructor() {
    this.observable$ = this.subject$.asObservable().pipe(debounceTime(1000));
  }

  update(): void {
    this.subject$.next();
  }
}
