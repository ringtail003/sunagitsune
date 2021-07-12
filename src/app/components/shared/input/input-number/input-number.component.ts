import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-input-number",
  templateUrl: "./input-number.component.html",
  styleUrls: ["./input-number.component.scss"],
})
export class InputNumberComponent implements OnInit {
  @Input() placeholder: string = "";
  @Input() value: number | null = null;

  @Output() changeValue = new EventEmitter<number | null>();

  constructor() {}

  ngOnInit(): void {}

  handleChange() {
    this.changeValue.emit(this.value);
  }
}
