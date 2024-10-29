//npm install discord.js
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
    console.log('Online!');
});

client.on('messageCreate', (message) => {
    if (message.content === '#start') {
        message.channel.send('mensagem');
    }
});

client.login('token');