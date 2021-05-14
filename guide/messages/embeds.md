## Guide to embeds

In discord.js, you can send an embed in 2 ways:
### Type 1 embed
```js
const Discord = require('discord.js');

const abc = new Discord.MessageEmbed()
.setTitle('Darkgoatie\'s guide to discord.js') // We used a `\` before the `'`, for preventing it from creating a new string and breaking the command.
.setDescription('Commands: \n !help = Shows you the help menu \n !repeat <phrase> = Repeats something.') // `\n` means a new line, same function with the Enter button in your keyboard.

message.channel.send(abc)
```

Here is a list of all embed builder functions:

```js
	.setColor('Color...') // Use hex here, example #FF0000 for red, A few list of hex colors below
	.setTitle('Title...')
	.setURL('Url...')
	.setAuthor('Some name', 'IMAGE-URL', 'LINK')
	.setDescription('Description...')
	.setThumbnail('IMAGE-URL')
	.addField('Field title...', 'Field description...', true) // The last 'True' part means this field will be inline. You can use false/true in that field.
	.setImage('IMAGE-URL')
	.setTimestamp() // Adds a timestamp to the embed
	.setFooter('Footer...', 'IMAGE-URL');
```

### Type 2 embed
#### Type 2-A
```js
message.channel.send({embed: {
  title: "Title...",
  description: "Description...",
  footer: "Footer...",
  thumbnail: "Thumbnail..."
}}) // embed we both define & send the embed here.
```
#### Type 2-B
```js
const def = {
  title: "Title...",
  description: "Description...",
  footer: "Footer...",
  thumbnail: "Thumbnail..."
} // We create the embed here

message.channel.send({embed: def }) // We send the embed here
```
### Hex Color codes
- Name | Hex Code
- Black | #000000
- Red | #FF0000
- Maroon | #800000
- Yellow | #FFFF00
