import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-check-circle",
  templateUrl: "./icon-check-circle.component.html",
  styleUrls: ["./icon-check-circle.component.scss"],
})
export class IconCheckCircleComponent implements OnInit {
  @Input() class = "";

  constructor() {}

  ngOnInit(): void {}
}
