import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-loading",
  templateUrl: "./icon-loading.component.html",
  styleUrls: ["./icon-loading.component.scss"],
})
export class IconLoadingComponent implements OnInit {
  @Input() size!: number;

  class!: string;

  constructor() {}

  ngOnInit(): void {
    this.class = `h-${this.size ?? 6} w-auto`;
  }
}
