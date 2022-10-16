const express = require("express");
const fallback = require("express-history-api-fallback");

const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/dist"));
app.use(fallback("dist/index.html", { root: __dirname }));

app.get("*", (request, response)  => {
  response.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
