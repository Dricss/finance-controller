const express = require("express");
const app = express();
const port = 3001;
const finances = require("./finances");
const cors = require("cors");

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Executando na porta ${port}`);
});

app.use(express.json());

app.use("/finances", finances);
