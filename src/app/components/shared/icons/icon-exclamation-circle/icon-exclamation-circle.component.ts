import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-exclamation-circle",
  templateUrl: "./icon-exclamation-circle.component.html",
  styleUrls: ["./icon-exclamation-circle.component.scss"],
})
export class IconExclamationCircleComponent implements OnInit {
  @Input() class = "";

  constructor() {}

  ngOnInit(): void {}
}
