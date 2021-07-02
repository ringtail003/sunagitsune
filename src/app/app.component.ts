import { Component, OnInit } from "@angular/core";
import * as Rx from "rxjs";
import { mergeMap, tap } from "rxjs/operators";
import { canvas } from "src/app/models/canvas/factory/index";
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
        mergeMap((file) =>
          Rx.of(file).pipe(
            mergeMap(() => canvas.fromFile(file).load()),
            mergeMap((source) => this.effector.effect(source, this.effect)),
            tap({
              next: (source) => {
                this.downloader.download(file, source.url);
              },
            })
          )
        )
      )
      .subscribe();
  }
}
