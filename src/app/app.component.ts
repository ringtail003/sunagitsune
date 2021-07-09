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
  persistUrl!: string;

  constructor(private config: ConfigService, private loader: LoaderService) {}

  ngOnInit(): void {
    this.persistUrl = "http://foobar.com";
  }

  ngAfterViewInit(): void {
    this.config.patch(this.loader.load());
  }

  handleOpenMenu(): void {
    this.isMenuOpen = true;
  }

  handleCloseMenu(): void {
    this.isMenuOpen = false;
  }
}
