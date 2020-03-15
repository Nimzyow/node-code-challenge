const express = require("express");
const cors = require("cors");
const locationQueryHandler = require("./routes/locationQueryHandler");

const app = express();
app.use(cors());

app.get("/locations?:q", locationQueryHandler);

module.exports = app;
