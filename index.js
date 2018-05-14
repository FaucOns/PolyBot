const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = "/"

var bot = client

client.on("ready", () => {
  console.log(`Bot oppérationnel, pour ${client.users.size} utilisateurs, dans ${client.channels.size} salons et sur ${client.guilds.size} serveurs.`); 
  client.user.setActivity(`Disponible sur ${client.guilds.size} serveurs`);
});

client.on("guildCreate", guild => {
  console.log(`Le bot a était ajouter sur le serveur : ${guild.name} (id: ${guild.id}). Il est le ${guild.memberCount}ème serveurs !`);
}); 

  client.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
    var command = args[0].toLowerCase();

    if (command == "help") {
      var embedhelpmember = new Discord.RichEmbed()
          .setTitle("**Liste des commandes**\n") 
          .addField(" - /help", "Affiche les commandes disponible")
          .setColor(0xFFA500)
          .setFooter("Des questions contacter le staff?")
      var embedhelpadmin = new Discord.RichEmbed() 
          .setTitle("**List des commandes Staff**\n")
          .addField(" - /kick", "Kick le membre mentionner (/kick @username [raison])")
          .addField(" - /ban", "Ban le membre mentionner (/ban @username [raison])")
          .addField(" - /purge", "Supprime le nombre de message scpecifié (/purge [nombre])")
          .setColor(0xFF0000)
          .setFooter("FaucOns")
          message.author.sendEmbed(embedhelpmember);
          message.author.sendEmbed(embedhelpadmin); }
    
    if(command === "kick") {
      if(!message.member.hasPermission("KICK_MEMBERS"))
        return message.reply("Vous n'avez pas la permission de réaliser ceci !");
      
      let member = message.mentions.members.first() || message.guild.members.get(args[0]);
      if(!member)
        return message.reply("La personne mentionner n'est pas valide !");
      if(!member.kickable) 
        return message.reply("Je ne peux pas ban ce membre car il possède un role supèrieure au mien !");
      
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "Une raison est nécessaire !";
      
      message.reply(`${member.user} a été kick par  ${message.author} pour : ${reason}`);
  
    }if(command === "ban") {
      if(!message.member.hasPermission("BAN_MEMBERS"))
          return message.reply("Vous n'avez pas la permission de réaliser ceci ! 🔒 ");
        
        let member = message.mentions.members.first();
        if(!member)
          return message.reply("La personne mentionner n'est pas valide !");
        if(!member.bannable) 
          return message.reply("Je ne peux pas ban ce membre car il possède un role supèrieure au mien !");
    
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "Une raison est nécessaire !";
        
        message.reply(`${member.user} a été banni par ${message.author} pour : ${reason} 🔨`);
      }
      
      if(command === "purge") {
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        
        var deleteCount = parseInt(args[0], 10);
        
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return message.reply("Purge terminé !");
  
        message.channel.bulkDelete(fetched)
      }
    });

process.env.TOKEN
