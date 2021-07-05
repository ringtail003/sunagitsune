import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-input-number",
  templateUrl: "./input-number.component.html",
  styleUrls: ["./input-number.component.scss"],
})
export class InputNumberComponent implements OnInit {
  @Input() placeholder: string = "";
  @Input() value: number | null = null;
  @Input() required = false;
  @Input() disabled = false;

  @Output() changeValue = new EventEmitter<number>();

  model: number | null = null;

  constructor() {}

  ngOnInit(): void {
    this.model = this.value;
  }
}
