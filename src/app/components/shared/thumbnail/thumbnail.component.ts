import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-thumbnail",
  templateUrl: "./thumbnail.component.html",
  styleUrls: ["./thumbnail.component.scss"],
})
export class ThumbnailComponent implements OnInit {
  @Input() effect!: string;
  @Input() label!: string;
  @Input() type!: string;

  constructor() {}

  ngOnInit(): void {}
}
