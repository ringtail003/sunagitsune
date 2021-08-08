import { Component, OnInit } from "@angular/core";
import { EffectMenuType } from "src/app/components/navbar/effect-menu-type";

@Component({
  selector: "app-setting",
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.scss"],
})
export class SettingComponent implements OnInit {
  activeMenuType: EffectMenuType = "border";

  constructor() {}

  ngOnInit(): void {}

  handleSelectMenu(type: EffectMenuType): void {
    this.activeMenuType = type;
  }
}
