const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage:
    "/Users/nimasoufiani/Documents/sqlite-tools-osx-x86-3310100/production"
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
