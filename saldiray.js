const Config = global.Config = require("./materials/Configuration/Config.json");
const Settings = global.Config = require("./materials/Configuration/Settings.json");
//-------------------------------------------------------------------------------------------//
const { Client } = require("discord.js");
const client = global.Client = new Client({fetchAllMembers: true});
//-------------------------------------------------------------------------------------------//
const mongoose = require("mongoose");
mongoose.connect(Config.DatabaseUrl.replace("<dbname>", Config.DatabaseName), {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false });
mongoose.connection.on("connected", () => {
  console.log("MongoDB is connected.")
  require("./materials/Bot.js");
});
//-------------------------------------------------------------------------------------------//
client.on('channelCreate', async (channel) => { //Kanal Açıldığında yapılcaklar
  var entry = await newChannel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor.id || Date.now()-entry.createdTimestamp > 5000)return;
  var user = entry.executor;
})
//-------------------------------------------------------------------------------------------//
client.on('channelDelete', async (channel) => { //Kanal Silindiğinde yapılcaklar
  var entry = await newChannel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor.id || Date.now()-entry.createdTimestamp > 5000)return;
  var user = entry.executor;
})
//-------------------------------------------------------------------------------------------//
client.on('channelUpdate', async (oldChannel, newChannel) => { //Kanal Güncellendiğinde yapılcaklar
  var entry = await newChannel.guild.fetchAuditLogs({type: 'CHANNEL_UPDATE'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor.id || Date.now()-entry.createdTimestamp > 5000)return;
  var user = entry.executor;
})
//-------------------------------------------------------------------------------------------//
client.on('roleCreate', async (role) => { //Role Açıldığında yapılcaklar
  var entry = await newChannel.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor.id || Date.now()-entry.createdTimestamp > 5000)return;
  var user = entry.executor;
})
//-------------------------------------------------------------------------------------------//
client.on('roleDelete', async (role) => { //Role Silindilinde yapılcaklar
  var entry = await newChannel.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor.id || Date.now()-entry.createdTimestamp > 5000)return;
  var user = entry.executor;
})
//-------------------------------------------------------------------------------------------//
client.on('roleUpdate', async (oldRole,newRole) => { //Role Güncellendiğinde yapılcaklar
  var entry = await newChannel.guild.fetchAuditLogs({type: 'ROLE_UPDATE'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor.id || Date.now()-entry.createdTimestamp > 5000)return;
  var user = entry.executor;
})
//-------------------------------------------------------------------------------------------//
client.on('guildMemberUpdate', async (oldMember, newMember) => { //Sağ tık Role verildiğinde yapılcaklar
  var entry = await newChannel.guild.fetchAuditLogs({type: 'MEMBER_ROLE_UPDATE'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor.id || Date.now()-entry.createdTimestamp > 5000)return;
  var user = entry.executor;
})
//-------------------------------------------------------------------------------------------//
client.on('guildBanAdd', async (guild) => { //Sağ tık ile Sunucudan banlandığında yapılcaklar
  var entry = await newChannel.guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor.id || Date.now()-entry.createdTimestamp > 5000)return;
  var user = entry.executor;
})
//-------------------------------------------------------------------------------------------//
client.on('guildMemberRemove', async () => { //Sağ tık ile biri sunucudan atıldığında yapılcaklar
  var entry = await newChannel.guild.fetchAuditLogs({type: 'MEMBER_KICK'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor.id || Date.now()-entry.createdTimestamp > 5000)return;
  var user = entry.executor;
})
//-------------------------------------------------------------------------------------------//
client.on('guildMemberAdd', async (bot) => { //Sunucuya bir bot eklendiğinde yapılcaklar
  var entry = await newChannel.guild.fetchAuditLogs({type: 'BOT_ADD'}).then(audit => audit.entries.first());
  if(!entry || !entry.executor.id || Date.now()-entry.createdTimestamp > 5000)return;
  var user = entry.executor;
})
//-------------------------------------------------------------------------------------------//