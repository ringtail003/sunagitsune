import { Component, OnInit } from "@angular/core";
import { BorderEffect } from "src/app/models/effect/effects/border-effect";
import { BorderType } from "src/app/models/effect/types/border-type";
import { ConfigService } from "src/app/services/config.service";

@Component({
  selector: "app-border-setting",
  templateUrl: "./border-setting.component.html",
  styleUrls: ["./border-setting.component.scss"],
})
export class BorderSettingComponent implements OnInit {
  constructor(private config: ConfigService) {}

  effect!: BorderEffect;

  ngOnInit(): void {
    this.config.watch().subscribe((effect) => {
      this.effect = effect.borderEffect;
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
