import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-clipboard",
  templateUrl: "./icon-clipboard.component.html",
  styleUrls: ["./icon-clipboard.component.scss"],
})
export class IconClipboardComponent implements OnInit {
  @Input() size!: number;

  class!: string;

  constructor() {}

  ngOnInit(): void {
    this.class = `h-${this.size ?? 6} w-auto`;
  }
}
