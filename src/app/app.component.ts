import { Component, OnInit } from "@angular/core";
import * as Rx from "rxjs";
import { mergeMap } from "rxjs/operators";
import { Canvas } from "src/app/models/canvas/canvas";
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
    Rx.from(files)
      .pipe(
        mergeMap((file) => new Canvas(file).load()),
        mergeMap((canvas) => this.effector.effect(canvas, this.effect))
      )
      .subscribe((canvas) => {
        canvas.dispose();
        this.downloader.download(canvas.source as File, canvas.url);
      });
  }
}
