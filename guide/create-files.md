# Creating the main file
You should create a bot file, you can just name it `index.js`.

### Setting user status when the bot is ready
```js
client.once('ready', () => {
    console.log(`Ready on ${client.user.tag}`);
  setInterval(function(){ 
    client1.user.setActivity(`${client.info.status}`, { type: 'PLAYING' }); 
 }, 30000); // This will refresh status every 30 seconds.
});
```


### The command handler
#### The message event listener
```js
client.on('message', message => {
    if (message.author.bot) return;
    
    if (message.content.indexOf(client.info.prefix) !== 0) return;

    const args = message.content.slice(client.info.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command)  || client.commands.find(a => a.aliases && a.aliases.includes(command));

    if (!cmd) return;
  
    cmd.execute(client, message, args);
});
```
#### The part that loads the commands
```js
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
```

### Logging in the client
```js
client.login(client.info.token) // Here is the part we log in with the bot.
```

### completing
Here is how a complete `index.js` should look like:
```js

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.info = require('./botinfo.json') // Loads info from botinfo.json

client.once('ready', () => {
    console.log(`Ready on ${client.user.tag}`);
  setInterval(function(){ 
    client1.user.setActivity(`${client.info.status}`, { type: 'PLAYING' }); 
 }, 30000); // This will refresh status every 30 seconds.
});


client.on('message', message => {
    if (message.author.bot) return;
    
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
```
# Creating package.json
You need to create a package.json first, this will install the node modules you choose.

```json
{
  "name": "YOUR PROJECT NAME",
  "description": "YOUR BOT DESCRIPTION",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "YOUR-USERNAME",
  "license": "YOUR LICENSE (OPTIONAL)",
  "dependencies": {
    "discord.js": "^12.5.1",
    "mathjs": "^9.3.2"
  }
}
```
Discord.js and mathjs are the recommended packages & versions, keeping them won't have any harm.
