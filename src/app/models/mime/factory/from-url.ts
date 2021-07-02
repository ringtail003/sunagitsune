import { Mime } from "src/app/models/mime";

export const fromUrl = (url: string): Mime => {
  const extension = url.toLocaleLowerCase().split(".")?.pop() || "";

  const mapping: { [key: string]: Mime } = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    jfif: "image/jpeg",
    pjpeg: "image/jpeg",
    pjp: "image/jpeg",
    png: "image/png",
  };

  const mime = mapping[extension];

  if (!mime) {
    throw new Error(`Can not detect mime type from "${url}"`);
  }

  return mime;
};
