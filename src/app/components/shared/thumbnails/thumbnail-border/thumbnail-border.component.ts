import { Component, Input, OnInit } from "@angular/core";
import { BorderType } from "src/app/models/effect/types/border-type";

@Component({
  selector: "app-thumbnail-border",
  templateUrl: "./thumbnail-border.component.html",
  styleUrls: ["./thumbnail-border.component.scss"],
})
export class ThumbnailBorderComponent implements OnInit {
  @Input() type!: BorderType;
  @Input() label!: string;

  constructor() {}

  ngOnInit(): void {}
}
