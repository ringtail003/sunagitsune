import { Mime } from "src/app/models/mime";

export const fromFile = (file: File): Mime => {
  return file.type as Mime;
};
