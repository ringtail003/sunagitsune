import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-x",
  templateUrl: "./icon-x.component.html",
  styleUrls: ["./icon-x.component.scss"],
})
export class IconXComponent implements OnInit {
  @Input() class = "";

  constructor() {}

  ngOnInit(): void {}
}
