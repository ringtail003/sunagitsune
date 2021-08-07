import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar-button",
  templateUrl: "./navbar-button.component.html",
  styleUrls: ["./navbar-button.component.scss"],
})
export class NavbarButtonComponent implements OnInit {
  @Input() text!: string;

  constructor() {}

  ngOnInit(): void {}
}
