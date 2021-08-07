import { Component, OnInit } from "@angular/core";
import { ResizePluginEffect } from "src/app/models/effect/plugin/resize-effect";
import { ResizeType } from "src/app/models/effect/types/resize-type";
import { ConfigService } from "src/app/services/config.service";

@Component({
  selector: "app-resize-setting",
  templateUrl: "./resize-setting.component.html",
  styleUrls: ["./resize-setting.component.scss"],
})
export class ResizeSettingComponent implements OnInit {
  effect!: ResizePluginEffect;
  error!: string | null;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.config.watch().subscribe((effect) => {
      this.effect = effect.resize;
      this.error =
        Object.values(effect.resize.getErrors()).find((error) => !!error) ||
        null;
    });
  }

  handleChangeType(value: string | null): void {
    this.config.patch({ resizeType: value as ResizeType });
  }

  handleChangeWidth(value: number | null): void {
    this.config.patch({ resizeWidth: value });
  }

  handleChangeHeight(value: number | null): void {
    this.config.patch({ resizeHeight: value });
  }
}
