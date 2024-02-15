import path from "path";
import urlImage from "../controllers/blogs/image-url";
import fs from "fs";
export default function imageData(myPath: string, image: any) {
  let baseName: string | null = path.basename(myPath);
  let imageUrl: string | null = urlImage(baseName);
  if (image) {
    fs.writeFile(myPath, image, (err) => {
      if (err) {
        console.log("Error" + err.message);
      } else {
        console.log("hallo from png");
      }
    });
  } else {
    (myPath as any) = null;
    imageUrl = null;
    baseName = null;
  }
  return { imageUrl, baseName };
}
