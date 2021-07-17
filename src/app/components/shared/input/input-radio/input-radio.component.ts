import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { kebabToDash } from "src/app/utils/kebab-to-dash";
import { uniqueId } from "src/app/utils/unique-id";

@Component({
  selector: "app-input-radio",
  templateUrl: "./input-radio.component.html",
  styleUrls: ["./input-radio.component.scss"],
})
export class InputRadioComponent implements OnInit {
  @Input() item!: { type: string; label: string };
  @Input() current!: string;
  @Input() name!: string;
  @Output() changeValue = new EventEmitter<string>();

  id!: string;
  path!: string;

  constructor() {}

  ngOnInit(): void {
    this.id = uniqueId();
    this.path = `${this.name}/${kebabToDash(this.item.type)}`;
  }

  handleChange() {
    this.changeValue.emit(this.item.type);
  }
}
