import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-github",
  templateUrl: "./icon-github.component.html",
  styleUrls: ["./icon-github.component.scss"],
})
export class IconGithubComponent implements OnInit {
  @Input() class: string = "";

  constructor() {}

  ngOnInit(): void {}
}
