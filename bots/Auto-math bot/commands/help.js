module.exports = {
	name: 'Help',
	aliases: ['gimmehelp'], // You can just cut off this line if you don't want any aliases
	description: 'Locks the channel',
	execute(client, message, args) {   
 const Discord = require("discord.js");

 const embed = new Discord.MessageEmbed()
 .setTitle("Help Menu")
 .setDescription("Some links: \n [Patreon](https://patreon.com/aether1611) | [Support Server](https://discord.gg/Dn3VJmP3Ba) | [Github](https://github.com/Darkgoatie/Handbook-of-darkgoatie)")
 .addField(`${client.info.prefix}help`, "Shows this menu", true)
 .addField(`Auto Maths (Passive)`, "Sends a result of your math problem if its right. For example when you type 100-69 in the chat it'll return 31.", true);

message.channel.send(embed)
        }
                 }
