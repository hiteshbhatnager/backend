require('dotenv').config()
const express = require('express');
const app = express();

const Port = 3000;

app.get("/", (req, res) => {
    res.send("hitesh");
})

app.get("/git", (req, res) => {
    res.send("github.hiteshbhatnager.com");
})

app.listen(process.env.PORT, () => {
    console.log(`app is lisening on ${Port} `)
})