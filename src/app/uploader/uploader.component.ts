import { Component } from "@angular/core";

@Component({
  selector: "app-uploader",
  templateUrl: "./uploader.component.html",
  styleUrls: ["./uploader.component.scss"],
})
export class UploaderComponent {
  onSelect(event: any) {
    console.log(event);
  }

  onRemove(event: any) {
    console.log(event);
  }
}
