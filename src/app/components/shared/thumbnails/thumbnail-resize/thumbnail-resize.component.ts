import { Component, Input, OnInit } from "@angular/core";
import { ResizeType } from "src/app/models/effect/types/resize-type";

@Component({
  selector: "app-thumbnail-resize",
  templateUrl: "./thumbnail-resize.component.html",
  styleUrls: ["./thumbnail-resize.component.scss"],
})
export class ThumbnailResizeComponent implements OnInit {
  @Input() type!: ResizeType;
  @Input() label!: string;

  constructor() {}

  ngOnInit(): void {}
}
