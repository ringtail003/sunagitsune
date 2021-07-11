import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";
import { EffectMenuType } from "src/app/components/navbar/effect-menu-type";
import { ConfigService } from "src/app/services/config.service";

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

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.config.watch().subscribe((config) => {
      // TODO プラグインの実装が完了したらoptionalを外す
      this.hasSetting = config.effects[this.menu]?.hasEffect() || false;
    });

    this.hasSetting = false;
  }

  ngOnChanges(): void {
    this.isActive = this.menu === this.activeMenuType;
  }

  handleClick(): void {
    this.selectMenu.emit(this.menu);
  }
}
