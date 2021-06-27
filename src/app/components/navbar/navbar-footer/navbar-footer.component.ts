import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar-footer",
  templateUrl: "./navbar-footer.component.html",
  styleUrls: ["./navbar-footer.component.scss"],
})
export class NavbarFooterComponent implements OnInit {
  @Input() url!: string;

  constructor() {}

  ngOnInit(): void {}
}
