import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown-trigger",
  templateUrl: "./dropdown-trigger.component.html",
  styleUrls: ["./dropdown-trigger.component.scss"],
})
export class DropdownTriggerComponent implements OnInit {
  private triggerClickHandler!: () => void;

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    this.triggerClickHandler();
  }

  setHandler(handler: () => void): void {
    this.triggerClickHandler = handler;
  }
}
