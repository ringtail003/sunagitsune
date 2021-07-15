import { Component, Input, OnInit } from "@angular/core";
import { kebabToDash } from "src/app/utils/kebab-to-dash";

@Component({
  selector: "app-thumbnail",
  templateUrl: "./thumbnail.component.html",
  styleUrls: ["./thumbnail.component.scss"],
})
export class ThumbnailComponent implements OnInit {
  @Input() effect!: string;
  @Input() label!: string;
  @Input() type!: string;

  filename!: string;

  constructor() {}

  ngOnInit(): void {
    this.filename = kebabToDash(this.type);
  }
}
