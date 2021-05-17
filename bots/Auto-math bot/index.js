const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.info = require('./info.json') // Loads info from info.json

client.once('ready', () => {
    console.log(`Ready on ${client.user.tag}`);
  setInterval(function(){ 
    client1.user.setActivity(`${client.info.status}`, { type: 'PLAYING' }); 
 }, 30000); // This will refresh status every 30 seconds.
});


client.on('message', message => {
    if (message.author.bot) return;
const mathed = try {math.evaluate(args.join(""))};

    if (!isNaN(mathed)) {
   message.channel.send(mathed);
    };

    if (message.content.indexOf(client.info.prefix) !== 0) return;

    const args = message.content.slice(client.info.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command)  || client.commands.find(a => a.aliases && a.aliases.includes(command));

    if (!cmd) return;
  
    cmd.execute(client, message, args);
});

client.commands = new Discord.Collection() // Here we create a discord command collection.

fs.readdir("./commands/", (err, files) => {
     if (err) return console.error(err)
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`)
        let commandName = file.split(".")[0] 
        console.log(`Attempting to load command ${commandName}`) // This will log in the console whenever a command is loaded on startup.
        client.commands.set(commandName, props);
    } // This is our command handler part.
)}); 

client.login(client.info.token) // Here is the part we log in with the bot.
