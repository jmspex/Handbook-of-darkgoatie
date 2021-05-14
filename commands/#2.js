module.exports = {
	name: 'lock',
	aliases: ['l'],
	description: 'Locks the channel',
	execute(client, message, args) {    // The return function will stop the code from working and returns the continuing line.
if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('No perms!');
const role = guild.roles.find("name", '@everyone');
message.channel.overwritePermissions(role,{ 'SEND_MESSAGES': false });
  }
}

// Unlock command in #3!
