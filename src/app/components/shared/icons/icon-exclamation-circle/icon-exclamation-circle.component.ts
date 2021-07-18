import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-exclamation-circle",
  templateUrl: "./icon-exclamation-circle.component.html",
  styleUrls: ["./icon-exclamation-circle.component.scss"],
})
export class IconExclamationCircleComponent implements OnInit {
  @Input() size!: number;

  class!: string;

  constructor() {}

  ngOnInit(): void {
    this.class = `h-${this.size ?? 6} w-auto`;
  }
}
