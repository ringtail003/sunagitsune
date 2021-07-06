import { Component, OnInit } from "@angular/core";
import { PreviewUpdater } from "src/app/services/preview-updater.service";

@Component({
  selector: "app-border-setting",
  templateUrl: "./border-setting.component.html",
  styleUrls: ["./border-setting.component.scss"],
})
export class BorderSettingComponent implements OnInit {
  constructor(private updater: PreviewUpdater) {}

  ngOnInit(): void {}

  handleChangeWidth(value: number | null): void {
    this.updater.update();
  }
}
