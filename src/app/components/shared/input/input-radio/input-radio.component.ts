import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { uniqueId } from "src/app/utils/unique-id";

@Component({
  selector: "app-input-radio",
  templateUrl: "./input-radio.component.html",
  styleUrls: ["./input-radio.component.scss"],
})
export class InputRadioComponent implements OnInit {
  @Input() selection: string | null = null;
  @Input() label: string | null = null;
  @Input() value: string | null = null;
  @Output() changeValue = new EventEmitter<string | null>();

  id!: string;

  constructor() {}

  ngOnInit(): void {
    this.id = uniqueId();
  }

  handleChange() {
    this.changeValue.emit(this.value);
  }
}
