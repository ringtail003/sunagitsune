import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-input-color",
  templateUrl: "./input-color.component.html",
  styleUrls: ["./input-color.component.scss"],
})
export class InputColorComponent implements OnInit {
  @Input() value: string | null = null;
  @Output() changeValue = new EventEmitter<string | null>();

  constructor() {}

  ngOnInit(): void {}

  handleChange() {
    this.changeValue.emit(this.value);
  }
}
