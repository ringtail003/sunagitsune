import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-chevron-down",
  templateUrl: "./icon-chevron-down.component.html",
  styleUrls: ["./icon-chevron-down.component.scss"],
})
export class IconChevronComponent implements OnInit {
  @Input() size!: number;

  class!: string;

  constructor() {}

  ngOnInit(): void {
    this.class = `h-${this.size ?? 6} w-auto`;
  }
}
