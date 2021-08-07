import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  contents = [
    {
      image: "01",
      caption: "設定を開きます。",
    },
    {
      image: "02",
      caption: "画像加工の内容を入力します。",
    },
    {
      image: "03",
      caption: "プレビュー画像がリアルタイムに確認できます。",
    },
    {
      image: "04",
      caption: "設定を閉じます。",
    },
    {
      image: "05",
      caption: "ファイルをアップロードしましょう。",
    },
    {
      image: "06",
      caption: "加工が終わると自動でダウンロードします。",
    },
    {
      image: "07",
      caption: "URLをブックマークしておくと便利です。",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
