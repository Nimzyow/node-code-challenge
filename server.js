const express = require("express");
const cors = require("cors");
const sequelize = require("./db");

const app = express();

app.use(cors());

app.get("/locations?:q", async (req, res) => {
  //req.query property is an object containing a property for each query string parameter in the route. If there is no query string, it is the empty object, {}.
  try {
    const [results, metadata] = await sequelize.query(
      `SELECT * FROM places WHERE name LIKE '${req.query.q}%'`
    );
    res.json({ msg: JSON.stringify(results) });
  } catch (error) {
    console.log("error occured", error);
  }
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello world!" });
});

module.exports = app;
