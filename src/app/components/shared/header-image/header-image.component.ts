import { Component, Inject, Input, OnInit } from "@angular/core";
import { EffectMenuType } from "src/app/components/navbar/effect-menu-type";
import {
  HeaderImageTextToken,
  HEADER_IMAGE_TEXT_TOKEN,
} from "src/app/tokens/header-image-text-token";

@Component({
  selector: "app-header-image",
  templateUrl: "./header-image.component.html",
  styleUrls: ["./header-image.component.scss"],
})
export class HeaderImageComponent implements OnInit {
  @Input() type!: EffectMenuType;

  description!: string;

  constructor(
    @Inject(HEADER_IMAGE_TEXT_TOKEN)
    private headerImageTextToken: HeaderImageTextToken
  ) {}

  ngOnInit(): void {
    this.description = this.headerImageTextToken(this.type);
  }
}
