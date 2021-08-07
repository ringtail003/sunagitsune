import { Pipe, PipeTransform } from "@angular/core";
import { EffectMenuType } from "src/app/components/navbar/effect-menu-type";

@Pipe({
  name: "menuLabel",
})
export class MenuLabelPipe implements PipeTransform {
  transform(type: EffectMenuType): string {
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
  }
}
