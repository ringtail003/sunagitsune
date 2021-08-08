import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-form-section-title",
  templateUrl: "./form-section-title.component.html",
  styleUrls: ["./form-section-title.component.scss"],
})
export class FormSectionTitleComponent implements OnInit {
  @Input() title!: string;

  constructor() {}

  ngOnInit(): void {}
}
