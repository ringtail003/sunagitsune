import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/services/config.service";

@Component({
  selector: "app-border-setting",
  templateUrl: "./border-setting.component.html",
  styleUrls: ["./border-setting.component.scss"],
})
export class BorderSettingComponent implements OnInit {
  constructor(private config: ConfigService) {}

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
