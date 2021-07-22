import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.scss"],
})
export class SplashComponent implements OnInit {
  @Input() canClose!: boolean;
  @Output() clickClose = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  handleClickCloseButton(): void {
    this.clickClose.emit();
  }
}
