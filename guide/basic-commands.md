# Creating commands
First, create a directory named `commands`.
Then, create a command file (`.js`) inside that directory. It'll look like this:
`/commands/CommandName.js`

in the file, put this:

```js
module.exports = {
	name: 'hi',
	aliases: ['aliase2','aliase2','aliase3'], // You can just cut off this line if you don't want any aliases
	description: 'Locks the channel',
	execute(client, message, args) {   
 // Command code here
        }
                 }
```

You will put the command code into `execute(c, m, a) {...this...}` part.
