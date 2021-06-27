import { Component, OnInit } from "@angular/core";
import { Effect } from "src/app/models/effect";
import { DownloaderService } from "src/app/services/downloader.service";
import { EffectorService } from "src/app/services/effector.service";
import { LoaderService } from "src/app/services/loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isMenuOpen = false;
  effect!: Effect;
  persistUrl!: string;

  constructor(
    private loader: LoaderService,
    private effector: EffectorService,
    private downloader: DownloaderService
  ) {}

  ngOnInit(): void {
    this.effect = this.loader.load();
    this.persistUrl = this.loader.generateUrl(this.effect);
  }

  handleToggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleUpload(files: File[]): void {
    files.forEach((file) => {
      this.effector.effect(file, this.effect);
      this.downloader.download(file);
    });
  }
}
