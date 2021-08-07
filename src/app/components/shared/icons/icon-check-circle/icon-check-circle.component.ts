import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-check-circle",
  templateUrl: "./icon-check-circle.component.html",
  styleUrls: ["./icon-check-circle.component.scss"],
})
export class IconCheckCircleComponent implements OnInit {
  @Input() size!: number;

  class!: string;

  constructor() {}

  ngOnInit(): void {
    this.class = `h-${this.size ?? 6} w-auto`;
  }
}
