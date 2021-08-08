import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown-content",
  templateUrl: "./dropdown-content.component.html",
  styleUrls: ["./dropdown-content.component.scss"],
})
export class DropdownContentComponent implements OnInit {
  isOpen = false;
  private extendContentHandler!: (isOpen: boolean) => void;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.isOpen = !this.isOpen;
    this.extendContentHandler(this.isOpen);
  }

  close(): void {
    this.isOpen = false;
    this.extendContentHandler(this.isOpen);
  }

  handleCloseButtonClick(): void {
    this.isOpen = false;
  }

  setHandler(handler: (isOpen: boolean) => void): void {
    this.extendContentHandler = handler;
  }
}
