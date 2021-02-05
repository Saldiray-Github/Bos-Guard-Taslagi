const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildId: String,
  userId: String
});

module.exports = mongoose.model("Schema", Schema);
