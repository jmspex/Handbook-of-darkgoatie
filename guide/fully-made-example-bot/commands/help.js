module.exports = {
	name: 'help',
	aliases: ['h'],
	description: 'Shows the help menu',
	execute(client, message, args) {
    const help = {
    title: "Help menu",
    description: "Commands:",
    fields: [
      {
        name: "!help",
        value: "Shows this menu :D",
        inline: true
      },
      {
        name: "!lock",
        value: "Locks the channel",
        inline: true
      },
      {
        name: "!unlock",
        value: "Unlocks the channel",
        inline: true
      },
    ]
    }
    message.channel.send({embed: help })
  }
}
