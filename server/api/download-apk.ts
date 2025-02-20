import { defineEventHandler, sendStream } from "h3";
import { Readable } from "node:stream";

export default defineEventHandler(async (event) => {
  const response = await fetch("https://todo-app.luislh.dev/todo-app.apk");
  const buffer = await response.arrayBuffer();

  event.node.res.setHeader("Content-Type", "application/vnd.android.package-archive");
  event.node.res.setHeader("Content-Disposition", "attachment; filename=todo-app.apk");

  return sendStream(event, Readable.from(Buffer.from(buffer)));
});