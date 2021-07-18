import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-cog",
  templateUrl: "./icon-cog.component.html",
  styleUrls: ["./icon-cog.component.scss"],
})
export class IconCogComponent implements OnInit {
  @Input() tone: { light?: boolean; dark?: boolean } = {
    light: true,
  };
  @Input() error!: boolean;
  @Input() size!: number;

  class!: string;

  constructor() {}

  ngOnInit(): void {
    this.class = `h-${this.size ?? 6} w-auto`;
  }
}
