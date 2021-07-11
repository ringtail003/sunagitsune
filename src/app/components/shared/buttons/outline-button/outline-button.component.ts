import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-outline-button",
  templateUrl: "./outline-button.component.html",
  styleUrls: ["./outline-button.component.scss"],
})
export class OutlineButtonComponent implements OnInit {
  @Input() text!: string;
  @Output() buttonClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    this.buttonClick.emit();
  }
}
