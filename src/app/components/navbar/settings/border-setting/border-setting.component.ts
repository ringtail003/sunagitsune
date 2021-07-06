import { Component, OnInit } from "@angular/core";
import { PreviewUpdater } from "src/app/services/preview-updater.service";

@Component({
  selector: "app-border-setting",
  templateUrl: "./border-setting.component.html",
  styleUrls: ["./border-setting.component.scss"],
})
export class BorderSettingComponent implements OnInit {
  constructor(private updater: PreviewUpdater) {}

  ngOnInit(): void {
    this.updater.observable$.subscribe(() => console.log("update"));
  }

  handleChangeWidth(value: number | null): void {
    this.updater.update();
  }

  handleChangeColor(value: string | null): void {
    this.updater.update();
  }
}
