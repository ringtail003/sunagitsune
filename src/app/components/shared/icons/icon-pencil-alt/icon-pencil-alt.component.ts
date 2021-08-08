import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-pencil-alt",
  templateUrl: "./icon-pencil-alt.component.html",
  styleUrls: ["./icon-pencil-alt.component.scss"],
})
export class IconPencilAltComponent implements OnInit {
  @Input() class = "";

  constructor() {}

  ngOnInit(): void {}
}
