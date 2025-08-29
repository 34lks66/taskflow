const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // si utilisation fichier .env

const routes = require("./route/TaskRoute") 

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API taskflow is running");
});

app.use("/api", routes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("MongoDB Atlas connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
})
.catch(err => console.error("MongoDB Atlas connection error : ", err));