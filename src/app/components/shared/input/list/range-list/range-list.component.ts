import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-range-list",
  templateUrl: "./range-list.component.html",
  styleUrls: ["./range-list.component.scss"],
})
export class RangeListComponent implements OnInit {
  @Input() placeholder: string = "";
  @Input() value: number | null = null;
  @Input() min!: number;
  @Input() max!: number;
  @Input() step!: number;
  @Input() error: string | null = null;

  @Output() changeValue = new EventEmitter<number | null>();

  list!: number[];

  constructor() {}

  ngOnInit(): void {
    this.list = Array.from({
      length: (this.max - this.min) / this.step + 1,
    }).map((_, i) => {
      return this.min + i * this.step;
    });
  }

  handleChange(): void {
    this.changeValue.emit(this.value);
  }
}
