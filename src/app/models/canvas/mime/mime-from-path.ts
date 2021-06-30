import { Mime } from "src/app/models/canvas/mime/interface";

export class MimeFromPath implements Mime {
  constructor(private path: string) {}

  detect(): string {
    const extension = this.getExtension();

    if (!extension) {
      throw new Error(`Can not detect mime type from "${this.path}"`);
    }

    if (this.isJpeg(extension)) {
      return "image/jpeg";
    }

    if (this.isPng(extension)) {
      return "image/png";
    }

    throw new Error(`Unsupported mime type detected. "${extension}"`);
  }

  private getExtension(): string | null {
    return this.path.toLocaleLowerCase().split(".")?.pop() || null;
  }

  private isJpeg(extension: string): boolean {
    return ["jpg", "jpeg", "jfif", "pjpeg", "pjp"].includes(extension);
  }

  private isPng(extension: string): boolean {
    return ["png"].includes(extension);
  }
}
