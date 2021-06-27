import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Input() isMenuOpen!: boolean;
  @Input() url!: string;
  @Output() toggle = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    this.toggle.emit();
  }
}
