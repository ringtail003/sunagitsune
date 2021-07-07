import { Component, OnInit } from "@angular/core";
import { EffectConfigService } from "src/app/services/effect-config.service";

@Component({
  selector: "app-border-setting",
  templateUrl: "./border-setting.component.html",
  styleUrls: ["./border-setting.component.scss"],
})
export class BorderSettingComponent implements OnInit {
  constructor(private config: EffectConfigService) {}

  ngOnInit(): void {
    this.config
      .watch()
      .subscribe((effect) => console.log("update", effect.borderConfig()));
  }

  handleChangeWidth(value: number | null): void {
    this.config.patch({ borderWidth: value });
  }

  handleChangeColor(value: string | null): void {
    this.config.patch({ borderColor: value });
  }
}
