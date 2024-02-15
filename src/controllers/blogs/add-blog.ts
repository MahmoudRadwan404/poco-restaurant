import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import path from "path";
import urlImage from "./image-url";
import * as fs from "fs";
import imageData from "../../helper/image-data";

export default async function addBlog(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandeler = handle(request);
  const title = requestHandeler.input("title");
  const image = requestHandeler.input("image");
  const description = requestHandeler.input("description");
  const published = Boolean(requestHandeler.input("published")) || false;
  if (!title || !image || !description) {
    reply.status(200).send({ msg: "All fields are required" });
  }
  const imageName = Math.random().toString(36).substring(2, 7);
  let myPath: string | null = path.normalize(
    __dirname + `../../../../storage/uploads/${imageName}.png`
  );
  const result = imageData(myPath, image);
  const now = new Date();
  const blogsCollection = collection("blogs");
  try {
    await blogsCollection.insertOne({
      title,
      description,
      baseName: result.baseName,
      imageUrl: result.imageUrl,
      time: now,
      published,
    });
    reply.send({ msg: "inserted successfully" });
  } catch (err) {
    reply.status(500).send(`Server error ${err}`);
  }
}
