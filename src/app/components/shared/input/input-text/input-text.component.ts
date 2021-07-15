import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-input-text",
  templateUrl: "./input-text.component.html",
  styleUrls: ["./input-text.component.scss"],
})
export class InputTextComponent implements OnInit {
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
