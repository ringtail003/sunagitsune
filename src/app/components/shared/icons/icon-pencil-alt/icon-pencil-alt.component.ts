import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-pencil-alt",
  templateUrl: "./icon-pencil-alt.component.html",
  styleUrls: ["./icon-pencil-alt.component.scss"],
})
export class IconPencilAltComponent implements OnInit {
  @Input() tone: "light" | "dark" = "dark";
  @Input() error!: boolean;
  @Input() size!: number;

  class!: string;

  constructor() {}

  ngOnInit(): void {
    this.class = `h-${this.size ?? 6} w-auto`;
  }
}
