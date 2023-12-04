const express = require('express');
const app = express();
const port = 3000;

const db = require('./models/index.js');

app.get("/healthcheck", async (req, res) => {
    console.log("Healthcheck");
    try {
        await db.sequelize.authenticate();
        await db.sequelize.close();
        res.status(200).send("Connection has been established successfully.");
    } catch (error) {
        await db.sequelize.close();
        res.status(500).send("Unable to connect to the database.");
    }
});

app.get('/createUser', async (req, res) => {
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`)
});