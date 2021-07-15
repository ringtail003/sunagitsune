import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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
  @Output() clickThumbnail = new EventEmitter<void>();

  filename!: string;

  constructor() {}

  ngOnInit(): void {
    this.filename = kebabToDash(this.type);
  }

  handleClick(): void {
    this.clickThumbnail.emit();
  }
}
