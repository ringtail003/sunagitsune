import { Component, OnInit } from "@angular/core";
import { EffectMenuType } from "src/app/components/navbar/effect-menu-type";

@Component({
  selector: "app-setting-page",
  templateUrl: "./setting-page.component.html",
  styleUrls: ["./setting-page.component.scss"],
})
export class SettingPageComponent implements OnInit {
  activeMenuType: EffectMenuType = "border";

  constructor() {}

  ngOnInit(): void {}

  handleSelectMenu(type: EffectMenuType): void {
    this.activeMenuType = type;
  }
}
