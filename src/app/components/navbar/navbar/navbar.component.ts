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
  @Output() clickLogo = new EventEmitter<void>();

  isOpen = false;
  activeMenuType: EffectMenuType = "resize";

  constructor() {}

  ngOnInit(): void {}

  handleMenuButtonClick(): void {
    (this.isOpen ? this.closeMenu : this.openMenu).emit();
    this.isOpen = !this.isOpen;
  }

  handleLogoClick(): void {
    this.clickLogo.emit();
  }

  handleSelectMenu(type: EffectMenuType): void {
    this.activeMenuType = type;
  }
}
