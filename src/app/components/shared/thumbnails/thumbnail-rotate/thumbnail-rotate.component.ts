import { Component, Input, OnInit } from "@angular/core";
import { RotateType } from "src/app/models/effect/types/rotate-type";

@Component({
  selector: "app-thumbnail-rotate",
  templateUrl: "./thumbnail-rotate.component.html",
  styleUrls: ["./thumbnail-rotate.component.scss"],
})
export class ThumbnailRotateComponent implements OnInit {
  @Input() type!: RotateType;
  @Input() label!: string;

  constructor() {}

  ngOnInit(): void {}
}
