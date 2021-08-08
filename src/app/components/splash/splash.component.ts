import { Component, OnInit } from "@angular/core";
import json from "../../../../package.json";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.scss"],
})
export class SplashComponent implements OnInit {
  version!: string;

  constructor() {}

  ngOnInit(): void {
    this.version = json.version;
  }
}
