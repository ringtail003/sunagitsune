import { Component, Input, OnInit } from "@angular/core";
import { EffectMenuType } from "src/app/components/navbar/effect-menu-type";

@Component({
  selector: "app-navbar-setting",
  templateUrl: "./navbar-setting.component.html",
  styleUrls: ["./navbar-setting.component.scss"],
})
export class NavbarSettingComponent implements OnInit {
  @Input() activeMenuType!: EffectMenuType;

  constructor() {}

  ngOnInit(): void {}
}
