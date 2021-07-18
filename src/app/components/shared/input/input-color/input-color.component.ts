import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-input-color",
  templateUrl: "./input-color.component.html",
  styleUrls: ["./input-color.component.scss"],
})
export class InputColorComponent implements OnInit, OnChanges {
  @Input() value: string | null = null;
  @Output() changeValue = new EventEmitter<string | null>();
  @Input() error: string | null = null;

  color!: string | null;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.color = this.value;
  }

  handleChange(): void {
    this.changeValue.emit(this.color);
  }

  handleClear(): void {
    this.changeValue.emit(null);
  }
}
