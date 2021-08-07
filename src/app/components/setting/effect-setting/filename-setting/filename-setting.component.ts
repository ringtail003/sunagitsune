import { Component, OnInit } from "@angular/core";
import { FilenamePluginEffect } from "src/app/models/effect/plugin/filename-effect";
import { ConfigService } from "src/app/services/config.service";

@Component({
  selector: "app-filename-setting",
  templateUrl: "./filename-setting.component.html",
  styleUrls: ["./filename-setting.component.scss"],
})
export class FilenameSettingComponent implements OnInit {
  effect!: FilenamePluginEffect;
  error!: string | null;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.config.watch().subscribe((effect) => {
      this.effect = effect.filename;
      this.error =
        Object.values(effect.filename.getErrors()).find((error) => !!error) ||
        null;
    });
  }

  handleChangePrefix(value: string | null): void {
    this.config.patch({ filenamePrefix: value });
  }

  handleChangeSuffix(value: string | null): void {
    this.config.patch({ filenameSuffix: value });
  }
}
