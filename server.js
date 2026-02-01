// server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Health check (para probar rápido)
app.get("/", (req, res) => {
  res.status(200).send("USX Money API: OK");
});

// Placeholder para SEP-10 / auth (aún no implementado)
app.post("/auth", (req, res) => {
  res.status(501).json({ error: "Not implemented yet" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
