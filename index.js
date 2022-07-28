const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS, //es para algo mas adelante :) //Ö
        Discord.Intents.FLAGS.GUILD_WEBHOOKS,
        Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    ],
})

client.on("ready", () => {
  console.log("Bot ready.onRunning")
})

client.on("message", (message) => {
  if(message.content.startsWith("d?links")) {
    message.reply("PONER LINKS ACA")
  }
  
  if(message.content.startsWith("d?no-quiero-hacerlo-pero-lo-tengo-que-hacer")) {
    message.reply("Esta es la version 0.0.0.0.1 del bot\nen la 1.0.0.0.0 me tomaré el bot algo más en serio, solo que tengo que trabajar en TBTB")
  }
})
