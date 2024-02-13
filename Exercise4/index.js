const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Smith" },
  { id: 3, name: "Bob" },
];

app.use(express.json());
app.use(morgan("dev"));

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:name", (req, res) => {
  const name = req.params.name.toLowerCase();

  const user = users.find((user) => user.name.toLowerCase() === name);
  if (!user) {
    return res.status(404).json({ message: "Data user tidak ditemukan" });
  }

  res.json(user);
});

app.get("/error", (req, res, next) => {
  next(new Error("Contoh kesalahan yang disengaja"));
});

app.use((req, res, next) => {
  res.status(404).json({ status: "error", message: "resource tidak ditemukan" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ status: "error", message: "terjadi kesalahan pada server" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});