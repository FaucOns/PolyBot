const Discord = require("discord.js");

const BOT_TOKEN = "NDQzODk1OTcyNzg4MDQzNzc3.DdUCSw.USjN5nm-d6qb48xVZwZ9UaEOsC4"
const PREFIX = "/"

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Fortnite")
    console.log("Bot Connecté!")
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
    var command = args[0].toLowerCase();

    if(command === "salon") {
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply("Tu n'a pas la permission pour faire cela !");
        var interval = setInterval (function (){
            message.guild.channels.find('id',"443896792732663809")
            .setName("Connectés : "+`${message.guild.members.filter(m => m.presence.status !== 'offline').size} / ${message.guild.memberCount}`+ " 👥");
      }, 1500);
      console.log("Commande salon demandée !");
    }
});

bot.login(BOT_TOKEN);