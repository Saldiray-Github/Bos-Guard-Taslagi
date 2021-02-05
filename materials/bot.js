const client = global.Client;
const { Client } = require("discord.js");
const Config = require("./Configuration/Config.json");

client.on("ready", () => console.log("Bot is ready. { "+client.user.username+" }"))
client.login(Config.Token).catch(console.error);
