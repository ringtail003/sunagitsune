import { InjectionToken } from "@angular/core";
import { EffectMenuType } from "src/app/components/navbar/effect-menu-type";

const headerImageTextToken: (type: EffectMenuType) => string = (type) => {
  return (
    {
      border:
        "画像に枠線を追加します。画像サイズを変更せずに外側に枠線をつけたい場合は、サイズ変更を併用してください。",
      resize:
        "画像のサイズを変更します。元のファイルより大きいサイズを指定すると、画像がぼやけますのでご注意ください。",
      text: "任意の場所にテキストを挿入します。影をつけるとテキストがくっきり表示されます。",
      shadow:
        "画像に影をつけます。画像サイズを変更せずにシャドウをつけたい場合は、サイズ変更を併用してください。",
      rotate:
        "画像を回転させます。テキストやドロップシャドウは回転した画像に対して追加されます。",
      filename:
        "ダウンロードファイル名の先頭と末尾にお好みのテキストを設定する事ができます。",
    }[type] || type
  );
};
export type HeaderImageTextToken = typeof headerImageTextToken;

export const HEADER_IMAGE_TEXT_TOKEN = new InjectionToken<HeaderImageTextToken>(
  "HeaderImageTextToken",
  {
    providedIn: "root",
    factory: () => headerImageTextToken,
  }
);
