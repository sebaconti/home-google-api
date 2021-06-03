const express = require("express");

const router = express.Router();
const app = express();
const server = require("http").Server(app);

router.get("/", (req, res) => {
    res.send("Servidor abierto");
    console.log(req.body);
});

router.post("/api/google", (req, res) => {
    console.log(req.body);
})

app.use("/", router);

console.log(process.env.PORT);
server.listen(process.env.PORT);