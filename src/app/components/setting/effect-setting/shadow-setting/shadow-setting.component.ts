import { Component, OnInit } from "@angular/core";
import { ShadowPluginEffect } from "src/app/models/effect/plugin/shadow-effect";
import { ShadowType } from "src/app/models/effect/types/shadow-type";
import { ConfigService } from "src/app/services/config.service";

@Component({
  selector: "app-shadow-setting",
  templateUrl: "./shadow-setting.component.html",
  styleUrls: ["./shadow-setting.component.scss"],
})
export class ShadowSettingComponent implements OnInit {
  effect!: ShadowPluginEffect;
  error!: string | null;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.config.watch().subscribe((effect) => {
      this.effect = effect.shadow;
      this.error =
        Object.values(effect.shadow.getErrors()).find((error) => !!error) ||
        null;
    });
  }

  handleChangeType(value: string | null): void {
    this.config.patch({ shadowType: value as ShadowType });
  }

  handleChangeBlur(value: number | null): void {
    this.config.patch({ shadowBlur: value });
  }

  handleChangeColor(value: string | null): void {
    this.config.patch({ shadowColor: value });
  }

  handleChangeOffset(value: number | null): void {
    this.config.patch({ shadowOffset: value });
  }
}
