import { Component } from "@angular/core";
import { DownloaderService } from "src/app/services/downloader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isMenuOpen = false;

  constructor(private downloader: DownloaderService) {}

  handleToggle(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleUpload(files: File[]): void {
    files.forEach((file) => this.downloader.download(file));
  }
}
