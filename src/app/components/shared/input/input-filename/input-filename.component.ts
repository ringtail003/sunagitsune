import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-input-filename",
  templateUrl: "./input-filename.component.html",
  styleUrls: ["./input-filename.component.scss"],
})
export class InputFilenameComponent implements OnInit {
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
