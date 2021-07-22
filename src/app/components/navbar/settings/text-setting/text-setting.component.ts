import { Component, OnInit } from "@angular/core";
import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { textPluginEffect } from "src/app/models/effect/plugin/text-effect";
import { TextType } from "src/app/models/effect/types/text-type";
import { ConfigService } from "src/app/services/config.service";

@Component({
  selector: "app-text-setting",
  templateUrl: "./text-setting.component.html",
  styleUrls: ["./text-setting.component.scss"],
})
export class TextSettingComponent implements OnInit {
  effect!: textPluginEffect;
  error!: string | null;
  reset!: Partial<EffectMetadata>;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.config.watch().subscribe((effect) => {
      this.effect = effect.text;
      this.reset = effect.text.getResetMetadata();
      this.error =
        Object.values(effect.text.getErrors()).find((error) => !!error) || null;
    });
  }

  handleChangeType(value: string | null): void {
    this.config.patch({ textType: value as TextType });
  }

  handleChangeCaption(value: string | null): void {
    this.config.patch({ textCaption: value });
  }

  handleChangeSize(value: number | null): void {
    this.config.patch({ textSize: value });
  }

  handleChangeAlpha(value: number | null): void {
    this.config.patch({ textAlpha: value });
  }

  handleChangeFont(value: string | null): void {
    this.config.patch({ textFont: value });
  }

  handleChangeColor(value: string | null): void {
    this.config.patch({ textColor: value });
  }

  handleChangeOffset(value: number | null): void {
    this.config.patch({ textOffset: value });
  }

  handleChangeStrokeColor(value: string | null): void {
    this.config.patch({ textStrokeColor: value });
  }

  handleChangeStrokeOffset(value: number | null): void {
    this.config.patch({ textStrokeOffset: value });
  }

  handleReset(): void {
    this.config.patch(this.reset);
  }
}
