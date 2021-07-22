import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/services/config.service";
import { LoaderService } from "src/app/services/loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  isReady: boolean = false;
  isOpenMenu: boolean = false;
  isOpenSplash: boolean = true;

  constructor(private config: ConfigService, private loader: LoaderService) {}

  ngOnInit(): void {
    this.loader.load().subscribe((metadata) => {
      this.config.patch(metadata);
    });

    setTimeout(() => {
      this.isReady = true;
      this.isOpenSplash = false;
    }, 2000);
  }

  ngAfterViewInit(): void {}

  handleOpenMenu(): void {
    this.isOpenMenu = true;
  }

  handleCloseMenu(): void {
    this.isOpenMenu = false;
  }

  handleClickLogo(): void {
    this.isOpenSplash = true;
  }

  handleClickSplashClose(): void {
    this.isOpenSplash = false;
  }
}
