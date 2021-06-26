import { Component, EventEmitter, Output } from "@angular/core";
import { NgxDropzoneChangeEvent } from "ngx-dropzone";

@Component({
  selector: "app-uploader",
  templateUrl: "./uploader.component.html",
  styleUrls: ["./uploader.component.scss"],
})
export class UploaderComponent {
  @Output() upload = new EventEmitter<File[]>();

  handleChange(event: NgxDropzoneChangeEvent) {
    this.upload.emit(event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
  }
}
