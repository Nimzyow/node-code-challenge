const sequelize = require("../db.js");

const locationQueryHandler = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(
      `SELECT * FROM places WHERE name LIKE '${req.query.q}%' ORDER BY name ASC`
    );

    res.json({ msg: JSON.stringify(results) });
  } catch (err) {
    console.log("an error happened", err);
  }
};

module.exports = locationQueryHandler;
