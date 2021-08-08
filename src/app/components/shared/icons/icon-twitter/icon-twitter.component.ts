import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-twitter",
  templateUrl: "./icon-twitter.component.html",
  styleUrls: ["./icon-twitter.component.scss"],
})
export class IconTwitterComponent implements OnInit {
  @Input() class = "";

  constructor() {}

  ngOnInit(): void {}
}
