import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-input-radio",
  templateUrl: "./input-radio.component.html",
  styleUrls: ["./input-radio.component.scss"],
})
export class InputRadioComponent implements OnInit {
  @Input() value: string | null = null;
  @Output() changeValue = new EventEmitter<string | null>();

  constructor() {}

  ngOnInit(): void {}

  handleChange() {
    this.changeValue.emit(this.value);
  }
}
