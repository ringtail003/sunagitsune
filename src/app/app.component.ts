import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/services/config.service";
import { LoaderService } from "src/app/services/loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  isMenuOpen!: boolean;

  constructor(private config: ConfigService, private loader: LoaderService) {}

  ngOnInit(): void {
    this.loader.load().subscribe((metadata) => {
      this.config.patch(metadata);
    });
  }

  ngAfterViewInit(): void {}

  handleOpenMenu(): void {
    this.isMenuOpen = true;
  }

  handleCloseMenu(): void {
    this.isMenuOpen = false;
  }
}
