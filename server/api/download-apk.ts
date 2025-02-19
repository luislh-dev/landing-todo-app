export default defineEventHandler(async (event) => {
  const apk = await fetch("https://todo-app.luislh.dev/todo-app.apk");
  const buffer = await apk.arrayBuffer();

  event.node.res.setHeader("Content-Type", "application/vnd.android.package-archive");
  event.node.res.setHeader("Content-Disposition", "attachment; filename=todo-app.apk");
  
  return Buffer.from(buffer);
});