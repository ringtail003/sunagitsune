import { InjectionToken } from "@angular/core";
import { EffectMenuType } from "src/app/components/navbar/effect-menu-type";

const menuLabelToken: (type: EffectMenuType) => string = (type) => {
  return (
    {
      border: "枠線",
      resize: "サイズ変更",
      text: "テキストの挿入",
      shadow: "ドロップシャドウ",
      rotate: "回転",
      filename: "ファイル名",
    }[type] || type
  );
};
export type MenuLabelToken = typeof menuLabelToken;

export const MENU_LABEL_TOKEN = new InjectionToken<MenuLabelToken>(
  "MenuLabelToken",
  {
    providedIn: "root",
    factory: () => menuLabelToken,
  }
);
