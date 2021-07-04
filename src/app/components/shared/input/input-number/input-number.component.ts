import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-input-number",
  templateUrl: "./input-number.component.html",
  styleUrls: ["./input-number.component.scss"],
})
export class InputNumberComponent implements OnInit {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() value!: number;
  @Input() required!: boolean;
  @Input() disabled!: boolean;

  @Output() changeValue = new EventEmitter<number>();

  model!: number;

  constructor() {}

  ngOnInit(): void {
    this.model = this.value;
  }
}
