import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-input-font",
  templateUrl: "./input-font.component.html",
  styleUrls: ["./input-font.component.scss"],
})
export class InputFontComponent implements OnInit {
  @Input() placeholder: string = "";
  @Input() value: string | null = null;
  @Input() error: string | null = null;

  @Output() changeValue = new EventEmitter<string | null>();

  constructor() {}

  ngOnInit(): void {}

  handleChange() {
    this.changeValue.emit(this.value);
  }
}
