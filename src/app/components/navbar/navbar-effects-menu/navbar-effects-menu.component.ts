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

  hasSetting: boolean = false;
  hasError: boolean = false;
  isActive!: boolean;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.config.watch().subscribe((effect) => {
      const plugin = effect.plugins[this.menu];

      if (!plugin) {
        throw new Error(`"${this.menu}" effect is not implemented.`);
      }

      this.hasSetting = plugin.hasEffect() || false;
      this.hasError = plugin.hasError() || false;
    });
  }

  ngOnChanges(): void {
    this.isActive = this.menu === this.activeMenuType;
  }

  handleClick(): void {
    this.selectMenu.emit(this.menu);
  }
}
