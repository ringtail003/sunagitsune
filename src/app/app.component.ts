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
  isOpenSetting: boolean = false;
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

  handleClickMenu(): void {
    this.isOpenSetting = !this.isOpenSetting;
  }

  handleClickSplashClose(): void {
    this.isOpenSplash = false;
  }
}
