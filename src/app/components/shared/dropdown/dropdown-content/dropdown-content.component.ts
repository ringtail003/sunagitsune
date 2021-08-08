import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown-content",
  templateUrl: "./dropdown-content.component.html",
  styleUrls: ["./dropdown-content.component.scss"],
})
export class DropdownContentComponent implements OnInit {
  isOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  handleCloseButtonClick(): void {
    this.isOpen = false;
  }
}
