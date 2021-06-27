import { Injectable } from "@angular/core";

interface Content {
  file: File;
  canvas: HTMLCanvasElement;
  url: string;
  element: HTMLAnchorElement;
}

@Injectable({
  providedIn: "root",
})
export class DownloaderService {
  download(file: File, canvas: HTMLCanvasElement): void {
    const content = this.create(file, canvas);
    this.execute(content);
    this.dispose(content);
  }

  private create(file: File, canvas: HTMLCanvasElement): Content {
    return {
      file,
      canvas,
      url: canvas.toDataURL("image/png"),
      element: document.createElement("a"),
    };
  }

  private execute(content: Content): void {
    document.body.appendChild(content.element);
    content.element.download = content.file.name;
    content.element.href = content.url;
    content.element.click();
  }

  private dispose(content: Content): void {
    content.element.remove();
    URL.revokeObjectURL(content.url);
  }
}
