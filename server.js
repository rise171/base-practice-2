const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Страница 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
    console.log("Сервер запущен на http://localhost:${PORT}");
});