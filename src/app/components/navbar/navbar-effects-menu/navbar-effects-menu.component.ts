import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar-effects-menu",
  templateUrl: "./navbar-effects-menu.component.html",
  styleUrls: ["./navbar-effects-menu.component.scss"],
})
export class NavbarEffectsMenuComponent implements OnInit {
  @Input() text!: string;
  @Input() isActive!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
