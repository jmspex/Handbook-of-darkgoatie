const ms = require('ms');

module.exports = {
	name: 'start',
        aliases: ['gstart','giveaway-start'],
	description: 'Starts a giveaway',
	execute(client, message, args) {
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':boom: You need to have the \`MANAGE_MESSAGES\` permissions or a role named \`Giveaways\`to start giveaways.');
    }

    let Channel = message.channel
    if(!Channel){
        return;
    }

    let Duration = args[1];
    if(!Duration || isNaN(ms(Duration))){
        return message.channel.send(':boom: Hmm. give a valid time please. I\'m not that clever to read your mind.');
    }
    
    if(ms(Duration) > 1296000000){
        return message.channel.send(':boom: You can\'t start a giveaway longer than \`15 days\`! ');
    }

    let NumberWinners = args[2];
    if(isNaN(NumberWinners) || (parseInt(NumberWinners) <= 0)){
        return message.channel.send(':boom: So who\'ll win the giveaway? Give a positive number!');
    }

    let Prize = args.slice(3).join(' ');
    if(!Prize){
        return message.channel.send(':boom: Oh, it seems like you didn\'t give me a valid prize!');
    }

  client.giveawaysManager.start(Channel, {
    time: ms(Duration),
    prize: Prize,
    winnerCount: NumberWinners,
    hostedBy: client.config.hostedBy ? message.author : null,
    messages: {
      giveaway:
        (client.config.everyoneMention ? "@everyone\n\n" : "") +
        ":tada: **GIVEAWAY** :tada:",
      giveawayEnded:
        (client.config.everyoneMention ? "@everyone\n\n" : "") +
        ":tada: **GIVEAWAY ENDED** :tada:",
      timeRemaining: "Time remaining: **{duration}**!",
      inviteToParticipate: `React with ${client.info.reaction} to participate!`,
      winMessage: "> Giveaway ended. Winners: {winners}, Prize: {prize}. ",
      embedFooter: "Giveaways",
      noWinner: "Not enough entrants to determine a winner!",
      hostedBy: "Hosted by: {user}",
      winners: "winner(s)",
      endedAt: "Ended at",
      units: {
        seconds: "seconds",
        minutes: "minutes",
        hours: "hours",
        days: "days",
        pluralS: false
      }
    }
  });

  message.delete()
}
}
