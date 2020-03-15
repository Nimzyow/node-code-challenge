const sequelize = require("../data/GB.tsv");

const locationQueryHandler = async (req, res) => {
  try {
    const [results, metadata] = await sequelize(
      `SELECT * FROM places WHERE name LIKE '${req.query.q}' ORDER BY name ASC`
    );

    res.json({ msg: JSON.stringify(results) });
  } catch (err) {
    console.log("error occured", err);
  }
};

module.exports = locationQueryHandler;
