import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-logo",
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.scss"],
})
export class LogoComponent implements OnInit {
  @Output() clickLogo = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  clickSvg(): void {
    this.clickLogo.emit();
  }
}
