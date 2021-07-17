import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { kebabToDash } from "src/app/utils/kebab-to-dash";

@Component({
  selector: "app-thumbnail",
  templateUrl: "./thumbnail.component.html",
  styleUrls: ["./thumbnail.component.scss"],
})
export class ThumbnailComponent implements OnInit {
  @Input() item!: { type: string; label: string };
  @Input() folder!: string;
  @Output() clickThumbnail = new EventEmitter<string>();

  filename!: string;

  constructor() {}

  ngOnInit(): void {
    this.filename = kebabToDash(this.item.type);
  }

  handleClick(): void {
    this.clickThumbnail.emit();
  }
}
