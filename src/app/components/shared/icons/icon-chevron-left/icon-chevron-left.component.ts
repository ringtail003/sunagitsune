import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-chevron-left",
  templateUrl: "./icon-chevron-left.component.html",
  styleUrls: ["./icon-chevron-left.component.scss"],
})
export class IconChevronLeftComponent implements OnInit {
  @Input() size!: number;

  class!: string;

  constructor() {}

  ngOnInit(): void {
    this.class = `h-${this.size ?? 6} w-auto`;
  }
}
