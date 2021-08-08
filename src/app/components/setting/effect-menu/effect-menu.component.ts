import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { EffectMenuType } from "src/app/components/navbar/effect-menu-type";

@Component({
  selector: "app-effect-menu",
  templateUrl: "./effect-menu.component.html",
  styleUrls: ["./effect-menu.component.scss"],
})
export class EffectMenuComponent implements OnInit {
  @Input() activeMenuType!: EffectMenuType;
  @Output() selectMenu = new EventEmitter<EffectMenuType>();

  menuTypes: EffectMenuType[] = [
    "border",
    "shadow",
    "text",
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
