# Beginning with sending messages
### Sending to a channel
```js
<Channel>.send('message')
// The '<Channel>' should be what you defined the channel as.
```

### Sending in dms
```js
<User>.send('')
// The '<User>' should be what you defined the user as.
```

To send a message somewhere, first you need to *find it*.

#### Channels

```js
const channel = message.channel
// This will define the 'channel' as the channel which the command trigger message was sent in.
```

```js
  client.channels.fetch('CHANNEL-ID')
  .then(chan => {
  const channel = chan
  });
  // Here we fetch the channel by its id, and define it as 'channel'.
```

#### Users

```js
const user = message.author
// This will define 'user' as the person who wrote the trigger message.
```

```
client.users.fetch('UserID').then(u => {
  const user = u
})
// This will define 'user' as the user with the person with the ID: "UserID".
```
> **Warning:** This requires guild member intents.
 

