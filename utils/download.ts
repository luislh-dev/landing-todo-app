export const downloadApk = () => {
  const link = document.createElement("a");
  link.href = "/api/download-apk";
  link.setAttribute("download", "todo-app.apk");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
