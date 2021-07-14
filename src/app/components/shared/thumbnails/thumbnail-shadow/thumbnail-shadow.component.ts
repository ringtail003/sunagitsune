import { Component, Input, OnInit } from "@angular/core";
import { ShadowType } from "src/app/models/effect/types/shadow-type";

@Component({
  selector: "app-thumbnail-shadow",
  templateUrl: "./thumbnail-shadow.component.html",
  styleUrls: ["./thumbnail-shadow.component.scss"],
})
export class ThumbnailShadowComponent implements OnInit {
  @Input() type!: ShadowType;
  @Input() label!: string;

  constructor() {}

  ngOnInit(): void {}
}
