import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-setting-button",
  templateUrl: "./setting-button.component.html",
  styleUrls: ["./setting-button.component.scss"],
})
export class SettingButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() isMenuOpen!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
