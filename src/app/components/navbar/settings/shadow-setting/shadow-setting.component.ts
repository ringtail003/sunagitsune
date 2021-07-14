import { Component, OnInit } from "@angular/core";
import { EffectMetadata } from "src/app/models/effect/effect-metadata";
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
  reset!: Partial<EffectMetadata>;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.config.watch().subscribe((effect) => {
      this.effect = effect.shadowEffect;
      this.error =
        Object.values(effect.shadowEffect.getErrors()).find(
          (error) => !!error
        ) || null;
      this.reset = effect.shadowEffect.resetMetadata();
    });
  }
}
