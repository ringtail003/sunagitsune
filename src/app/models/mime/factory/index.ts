import { fromCanvas } from "src/app/models/mime/factory/from-canvas";
import { fromFile } from "src/app/models/mime/factory/from-file";
import { fromUrl } from "src/app/models/mime/factory/from-url";

export const mime = {
  fromCanvas,
  fromFile,
  fromUrl,
};
