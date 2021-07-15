import { Injectable } from "@angular/core";

interface Content {
  filename: string;
  file: File;
  url: string;
  element: HTMLAnchorElement;
}

@Injectable({
  providedIn: "root",
})
export class DownloaderService {
  download(file: File, url: string, filename: string): void {
    const content = this.create(file, url, filename);
    this.execute(content);
    this.dispose(content);
  }

  private create(file: File, url: string, filename: string): Content {
    return {
      filename,
      file,
      url,
      element: document.createElement("a"),
    };
  }

  private execute(content: Content): void {
    document.body.appendChild(content.element);
    content.element.download = content.filename;
    content.element.href = content.url;
    content.element.click();
  }

  private dispose(content: Content): void {
    content.element.remove();
    URL.revokeObjectURL(content.url);
  }
}
