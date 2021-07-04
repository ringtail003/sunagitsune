import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
} from "@angular/core";
import { EffectMenuType } from "src/app/components/navbar/effect-menu-type";

@Component({
  selector: "app-navbar-effects-menu",
  templateUrl: "./navbar-effects-menu.component.html",
  styleUrls: ["./navbar-effects-menu.component.scss"],
})
export class NavbarEffectsMenuComponent implements OnInit, OnChanges {
  @Input() menu!: EffectMenuType;
  @Input() activeMenuType!: EffectMenuType;

  @Output() selectMenu = new EventEmitter<EffectMenuType>();

  hasSetting!: boolean;
  isActive!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.hasSetting = false;
  }

  ngOnChanges(): void {
    this.isActive = this.menu === this.activeMenuType;
  }

  handleClick(): void {
    this.selectMenu.emit(this.menu);
  }
}
