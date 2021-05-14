# Guide for basic commands

### Commands:


##### 

##### Lock
```js
module.exports = {
	name: 'lock',
	aliases: ['l'],
	description: 'Locks the channel',
	execute(client, message, args) {    // The return function will stop the code from working and returns the continuing line.
if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('No perms!');
const role = guild.roles.find("name", '@everyone');
    try { // The try will prevent the bot from crashing if doesn't have perms, is quarantined etc.
message.channel.overwritePermissions(role,{ 'SEND_MESSAGES': true });
message.channel.send('The channel has been locked!') // Here we notify that the channel perms were successfully modified.
    } catch(e) { // This part will report the error if an error occurs.
      message.channel.send('Error!'/*This is the part which will send us the error -> */+ e)
    }
  }
}
```

##### Unlock
```js
module.exports = {
	name: 'unlock',
	aliases: ['ul'],
	description: 'Locks the channel',
	execute(client, message, args) {    // The return function will stop the code from working and returns the continuing line.
if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('No perms!');
const role = message.guild.roles.find("name", '@everyone'); // Here we get the role ID of @everyone
    try { // The try will prevent the bot from crashing if doesn't have perms, is quarantined etc.
message.channel.overwritePermissions(role,{ 'SEND_MESSAGES': true });
message.channel.send('The channel has been unlocked!') // Here we notify that the channel perms were successfully modified.
    } catch(e) { // This part will report the error if an error occurs.
      message.channel.send('Error!'/*This is the part which will send us the error -> */+ e)
    }

  }
}
```
