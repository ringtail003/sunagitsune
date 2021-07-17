import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { uniqueId } from "src/app/utils/unique-id";

@Component({
  selector: "app-input-radio",
  templateUrl: "./input-radio.component.html",
  styleUrls: ["./input-radio.component.scss"],
})
export class InputRadioComponent implements OnInit {
  @Input() item!: { type: string; label: string };
  @Input() current!: string;
  @Output() changeValue = new EventEmitter<string>();

  id!: string;

  constructor() {}

  ngOnInit(): void {
    this.id = uniqueId();
  }

  handleChange() {
    this.changeValue.emit(this.item.type);
  }
}
