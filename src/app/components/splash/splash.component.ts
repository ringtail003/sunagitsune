import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import json from "../../../../package.json";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.scss"],
})
export class SplashComponent implements OnInit {
  @Input() withCloseButton = false;

  @Output() clickClose = new EventEmitter<void>();

  version!: string;

  constructor() {}

  ngOnInit(): void {
    this.version = json.version;
  }

  handleClickCloseButton(): void {
    this.clickClose.emit();
  }
}
