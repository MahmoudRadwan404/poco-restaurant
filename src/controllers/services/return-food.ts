import { FastifyReply, FastifyRequest } from "fastify";
import handle from "../../core/request";
import { collection } from "../../database/connection";
import path from "path";
import urlImage from "../blogs/image-url";
import fs from "fs";
import imageData from "../../helper/image-data";

export default async function returnFood(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const requestHandler = handle(request);
  const image = requestHandler.input("image");
  const comment = requestHandler.input("comment");
  const spoiledFood = collection("spoiled");
  const imageName = Math.random().toString(36).substring(2, 7);
  if (!image || !comment) {
    return reply.send("All fields are required");
  }
  let myPath: string | null = path.normalize(
    __dirname + `../../../../storage/uploads/${imageName}.png`
  );
  const result = imageData(myPath, image);
  try {
    await spoiledFood.insertOne({
      comment,
      imageUrl: result.imageUrl,
      baseName: result.baseName,
      status: "pending",
    });
    reply.send({ message: "Successfully delivered to the restaurant!" });
  } catch (err) {
    reply.status(505).send({ msg: "Something went wrong from return food " });
  }
}
