import { Mime } from "src/app/models/canvas/mime/interface";

export class MimeFromFile implements Mime {
  constructor(private file: File) {}

  detect(): string {
    return this.file.type;
  }
}
