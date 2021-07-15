import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-area-title",
  templateUrl: "./area-title.component.html",
  styleUrls: ["./area-title.component.scss"],
})
export class AreaTitleComponent implements OnInit {
  @Input() title!: string;

  constructor() {}

  ngOnInit(): void {}
}
