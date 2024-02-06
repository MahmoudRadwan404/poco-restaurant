import path from "path";
import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import multiPart from "@fastify/multipart";
import formBody from "@fastify/formbody";

const app = fastify({ logger: false });
app.register(formBody);
app.register(multiPart, {
  attachFieldsToBody: "keyValues",
});

app.register(fastifyStatic, {
  root: path.join(process.cwd(), "storage/uploads"),
  prefix: "/uploads",
});

app.listen({ port: 4000 }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`server listening on ${address}`);
});

export default app;
