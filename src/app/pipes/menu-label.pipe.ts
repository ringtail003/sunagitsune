import { Inject, Pipe, PipeTransform } from "@angular/core";
import { EffectMenuType } from "src/app/components/navbar/effect-menu-type";
import {
  MenuLabelToken,
  MENU_LABEL_TOKEN,
} from "src/app/tokens/menu-label-token";

@Pipe({
  name: "menuLabel",
})
export class MenuLabelPipe implements PipeTransform {
  constructor(
    @Inject(MENU_LABEL_TOKEN) private menuLabelToken: MenuLabelToken
  ) {}

  transform(type: EffectMenuType): string {
    return this.menuLabelToken(type);
  }
}
