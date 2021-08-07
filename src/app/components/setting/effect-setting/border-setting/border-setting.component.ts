import { Component, OnInit } from "@angular/core";
import { EffectMetadata } from "src/app/models/effect/effect-metadata";
import { BorderEffect } from "src/app/models/effect/plugin/border-effect";
import { BorderType } from "src/app/models/effect/types/border-type";
import { ConfigService } from "src/app/services/config.service";

@Component({
  selector: "app-border-setting",
  templateUrl: "./border-setting.component.html",
  styleUrls: ["./border-setting.component.scss"],
})
export class BorderSettingComponent implements OnInit {
  effect!: BorderEffect;
  error!: string | null;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.config.watch().subscribe((effect) => {
      this.effect = effect.border;
      this.error =
        Object.values(effect.border.getErrors()).find((error) => !!error) ||
        null;
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
}
