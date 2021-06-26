import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-cog",
  templateUrl: "./icon-cog.component.html",
  styleUrls: ["./icon-cog.component.scss"],
})
export class IconCogComponent implements OnInit {
  @Input() isActive!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
