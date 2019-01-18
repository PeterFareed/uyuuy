const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("535599072887701509")
setInterval(function() {
channel.send(`master yi master yi master yi master yi master yi master yi master yi master yi master yi master yi master yi master yi`);
}, 30)
})

client.login(process.env.BOT_TOKEN);