const express = require("express");

const app = express();
const server = require("http").Server(app);

app.get("/", (req, res) => {
    res.send("Servidor abierto");
    console.log(req.body);
});

app.post("/api/google", (req, res) => {
    console.log(req.body);
})

console.log(process.env.PORT);
server.listen(process.env.PORT);