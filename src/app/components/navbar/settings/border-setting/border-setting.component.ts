import { Component, OnInit } from "@angular/core";
import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { BorderPluginEffect } from "src/app/models/effect/plugin/border-effect";
import { BorderType } from "src/app/models/effect/types/border-type";
import { ConfigService } from "src/app/services/config.service";

@Component({
  selector: "app-border-setting",
  templateUrl: "./border-setting.component.html",
  styleUrls: ["./border-setting.component.scss"],
})
export class BorderSettingComponent implements OnInit {
  constructor(private config: ConfigService) {}

  effect!: BorderPluginEffect;
  error!: string | null;
  reset!: Partial<EffectMetadata>;

  ngOnInit(): void {
    this.config.watch().subscribe((effect) => {
      this.effect = effect.borderEffect;
      this.error =
        Object.values(effect.borderEffect.getErrors()).find(
          (error) => !!error
        ) || null;
      this.reset = effect.borderEffect.resetMetadata();
    });
  }

  handleChangeWidth(value: number | null): void {
    this.config.patch({ borderWidth: value });
  }

  handleChangeColor(value: string | null): void {
    this.config.patch({ borderColor: value });
  }

  handleChangeType(value: string | null): void {
    this.config.patch({ borderType: value as BorderType });
  }

  handleReset(): void {
    this.config.patch(this.reset);
  }
}
