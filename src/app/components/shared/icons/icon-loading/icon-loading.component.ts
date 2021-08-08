import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-loading",
  templateUrl: "./icon-loading.component.html",
  styleUrls: ["./icon-loading.component.scss"],
})
export class IconLoadingComponent implements OnInit {
  @Input() class = "";

  constructor() {}

  ngOnInit(): void {}
}
