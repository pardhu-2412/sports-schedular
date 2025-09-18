const app = require("./app");

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const host = process.env.HOST || "0.0.0.0";

app.listen(port, host, () => {
  console.log(`server started at http://${host === "0.0.0.0" ? "localhost" : host}:${port}`);
});
