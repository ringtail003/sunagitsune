import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown-trigger",
  templateUrl: "./dropdown-trigger.component.html",
  styleUrls: ["./dropdown-trigger.component.scss"],
})
export class DropdownTriggerComponent implements OnInit {
  constructor() {}

  private handler: () => void = () => {};

  ngOnInit(): void {}

  handleClick(): void {
    this.handler();
  }

  setHandler(handler: () => void): void {
    this.handler = handler;
  }
}
