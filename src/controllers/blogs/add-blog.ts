import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import path from "path";
import urlImage from "./image-url";
import * as fs from "fs";

export default async function addBlog(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const title = requestHandeler.input("title");
  const image = requestHandeler.input("image");
  const description = requestHandeler.input("description");
  if (!title || !image || !description) {
    reply.status(200).send({ msg: "All fields are required" });
  }
  const imageName = Math.random().toString(36).substring(2, 7);
  let myPath: string | null = path.normalize(
    __dirname + `../../../../storage/uploads/${imageName}.png`
  );

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
    myPath = null;
    imageUrl = null;
    baseName = null;
  }
  const now = new Date();
  const blogsCollection = collection("blogs");
  try {
    await blogsCollection.insertOne({
      title,
      description,
      baseName,
      imageUrl,
      time: now,
    });
    reply.send({ msg: "inserted successfully" });
  } catch (err) {
    reply.status(500).send(`Server error ${err}`);
  }
}
