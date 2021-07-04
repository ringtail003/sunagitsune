import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { EffectMenuType } from "src/app/components/navbar/effect-menu-type";

@Component({
  selector: "app-navbar-effects",
  templateUrl: "./navbar-effects.component.html",
  styleUrls: ["./navbar-effects.component.scss"],
})
export class NavbarEffectsComponent implements OnInit {
  @Input() activeMenuType!: EffectMenuType;
  @Output() selectMenu = new EventEmitter<EffectMenuType>();

  menuTypes: EffectMenuType[] = [
    "border",
    "shadow",
    "resize",
    "rotate",
    "filename",
  ];

  constructor() {}

  ngOnInit(): void {}

  handleSelectMenu(type: EffectMenuType) {
    this.selectMenu.emit(type);
  }
}
