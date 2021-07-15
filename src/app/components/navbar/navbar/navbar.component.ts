import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { EffectMenuType } from "src/app/components/navbar/effect-menu-type";

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
  activeMenuType: EffectMenuType = "resize";

  constructor() {}

  ngOnInit(): void {
    this.emit();
  }

  handleClick(): void {
    this.isOpen = !this.isOpen;
    this.emit();
  }

  handleSelectMenu(type: EffectMenuType): void {
    this.activeMenuType = type;
  }

  emit(): void {
    (this.isOpen ? this.openMenu : this.closeMenu).emit();
  }
}
