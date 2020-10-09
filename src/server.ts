import express from "express";

const app = express();

app.get('/', (request, response) => {
    response.send("Hello Parser");
});

app.listen(5000);
