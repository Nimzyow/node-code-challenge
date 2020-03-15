const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../../../Documents/sqlite-tools-osx-x86-3310100/GB.tsv"
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected");
  } catch (err) {
    console.log("connection failed", err);
  }
};

connect();

module.exports = sequelize;
