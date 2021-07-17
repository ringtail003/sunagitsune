import { Component, OnInit } from "@angular/core";
import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { RotatePluginEffect } from "src/app/models/effect/plugin/rotate-effect";
import { RotateType } from "src/app/models/effect/types/rotate-type";
import { ConfigService } from "src/app/services/config.service";

@Component({
  selector: "app-rotate-setting",
  templateUrl: "./rotate-setting.component.html",
  styleUrls: ["./rotate-setting.component.scss"],
})
export class RotateSettingComponent implements OnInit {
  effect!: RotatePluginEffect;
  error!: string | null;
  reset!: Partial<EffectMetadata>;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.config.watch().subscribe((effect) => {
      this.effect = effect.rotate;
      this.reset = effect.rotate.resetMetadata();
      this.error =
        Object.values(effect.rotate.getErrors()).find((error) => !!error) ||
        null;
    });
  }

  handleChangeType(value: string | null): void {
    this.config.patch({ rotateType: value as RotateType });
  }

  handleReset(): void {
    this.config.patch(this.reset);
  }
}
