import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  @Input() url!: string;
  @Output() openMenu = new EventEmitter<void>();
  @Output() closeMenu = new EventEmitter<void>();

  isOpen = false;

  constructor() {}

  ngOnInit(): void {
    this.emit();
  }

  handleClick(): void {
    this.isOpen = !this.isOpen;
    this.emit();
  }

  emit(): void {
    (this.isOpen ? this.openMenu : this.closeMenu).emit();
  }
}
