import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Output() clickMenu = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  handleMenuButtonClick(): void {
    this.clickMenu.emit();
  }
}
