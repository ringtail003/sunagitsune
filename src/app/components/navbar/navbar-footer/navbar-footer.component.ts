import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import * as Rx from "rxjs";
import { ConfigService } from "src/app/services/config.service";
import { objectToQueryString } from "src/app/utils/object-to-query-string";

@Component({
  selector: "app-navbar-footer",
  templateUrl: "./navbar-footer.component.html",
  styleUrls: ["./navbar-footer.component.scss"],
})
export class NavbarFooterComponent implements OnInit {
  copied = false;
  url!: string;

  constructor(
    private config: ConfigService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.config.watch().subscribe((effect) => {
      this.url = objectToQueryString(
        this.document.location.href,
        effect.createMetadata()
      );
    });
  }

  handleClick(): void {
    navigator.clipboard.writeText(this.url);
    this.copied = true;
    Rx.timer(3000).subscribe(() => (this.copied = false));
  }
}
