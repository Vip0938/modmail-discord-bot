const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "eveoryone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

client.login(process.env.TOKEN);
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Jeremy Bot is really nice'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const charModMail = require('char-mod-mail');
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

  //Important Changing Area
charModMail.ModMail(client, {
  guildID: "1203112983526379560", //put your guild id here
  categoryID: "1237102064958701638", //put your category id here
  staffRole: "1258773884228993035", //put your staff role id here
  embedColor: "#00FF00", //change the hax color code if you want
  anonymousReply: false/true, 
  closedTitle: "Ticket Closed.",
  closedMessage: "A staff member has closed your ticket.",
  staffOpenedTitle: "User Opened Mod Mail",
  staffOpenedMessage: "A user opened a ticket.",
  userOpenedTitle: "Mod Mail Created",
  userOpenedMessage: "You created a ticket, our support team usually reply at 10AM EST.",
  wrongEmoji: "❎", // if you want you can change but don't change it recommaned.
  rightEmoji: "✅" // if you want you can change but don't change it recommaned.
})
});
