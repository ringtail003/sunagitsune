import { Component, OnInit } from "@angular/core";
import { Effect } from "src/app/models/effect";
import { DownloaderService } from "src/app/services/downloader.service";
import { EffectorService } from "src/app/services/effectors/effector.service";
import { LoaderService } from "src/app/services/loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isMenuOpen!: boolean;
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

  handleOpenMenu(): void {
    this.isMenuOpen = true;
  }

  handleCloseMenu(): void {
    this.isMenuOpen = false;
  }

  handleUpload(files: File[]): void {
    files.forEach((file) => {
      this.effector.effect(file, file.type, this.effect).subscribe((url) => {
        this.downloader.download(file, url);
      });
    });
  }
}
