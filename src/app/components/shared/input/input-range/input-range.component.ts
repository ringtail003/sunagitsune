import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-input-range",
  templateUrl: "./input-range.component.html",
  styleUrls: ["./input-range.component.scss"],
})
export class InputRangeComponent implements OnInit, OnChanges {
  @Input() min!: number;
  @Input() max!: number;
  @Input() step!: number;
  @Input() value: number | null = null;

  @Output() changeValue = new EventEmitter<number | null>();

  model: number = 0;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.model = this.value || 0;
  }

  handleChange() {
    this.changeValue.emit(this.model);
  }
}
