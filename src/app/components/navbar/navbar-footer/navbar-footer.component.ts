import { Component, Input, OnInit } from "@angular/core";
import * as Rx from "rxjs";
import { delay, tap } from "rxjs/operators";

@Component({
  selector: "app-navbar-footer",
  templateUrl: "./navbar-footer.component.html",
  styleUrls: ["./navbar-footer.component.scss"],
})
export class NavbarFooterComponent implements OnInit {
  @Input() url!: string;

  copied = false;

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    Rx.from(navigator.clipboard.writeText(this.url))
      .pipe(
        tap({ next: () => (this.copied = true) }),
        delay(3000),
        tap({ next: () => (this.copied = false) })
      )
      .subscribe();
  }
}
