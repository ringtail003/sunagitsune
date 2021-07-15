import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NgxDropzoneChangeEvent } from "ngx-dropzone";
import * as Rx from "rxjs";
import { mergeMap, tap } from "rxjs/operators";
import { canvasFactory } from "src/app/models/canvas/factory/index";
import { Effect } from "src/app/models/effect/effect";
import { ConfigService } from "src/app/services/config.service";
import { DownloaderService } from "src/app/services/downloader.service";
import { EffectorService } from "src/app/services/effectors/effector.service";

@Component({
  selector: "app-uploader",
  templateUrl: "./uploader.component.html",
  styleUrls: ["./uploader.component.scss"],
})
export class UploaderComponent implements OnInit {
  @Output() upload = new EventEmitter<File[]>();

  effect!: Effect;

  constructor(
    private config: ConfigService,
    private effector: EffectorService,
    private downloader: DownloaderService
  ) {}

  ngOnInit(): void {
    this.config.watch().subscribe((effect) => {
      this.effect = effect;
    });
  }

  handleChange(event: NgxDropzoneChangeEvent) {
    const files = event.addedFiles;

    Rx.from(files)
      .pipe(
        mergeMap((file) =>
          Rx.of(file).pipe(
            mergeMap(() => canvasFactory.fromFile(file).load()),
            mergeMap((source) => this.effector.effect(source, this.effect)),
            tap({
              next: (source) => {
                this.downloader.download(
                  file,
                  source.url,
                  this.effect.filenameEffect.getFilename(file.name)
                );
              },
            })
          )
        )
      )
      .subscribe();
  }

  onRemove(event: any) {
    console.log(event);
  }
}
