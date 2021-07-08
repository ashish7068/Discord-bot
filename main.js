const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE","CHANNEL","REACTION"]});

const prefix = '-';

const fs = require('fs');
const memberCounter= require('./counter/member-counter')

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
   const command = require(`./commands/${file}`);
   client.commands.set(command.name, command);
}

client.on('ready', () => {
   console.log('Browser Jr is Online.');
   memberCounter(client);


});
client.on('guildMemberAdd', guildMember => {
   let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Mod2');
   guildMember.roles.add(welcomeRole);
   guildMember.guild.channels.cache.get('806499387152531466').send(`Welcome <@${guildMember.user.id}> to our Server! `);
});
client.on('message', message => {
   if (!message.content.startsWith(prefix) || message.author.bot) return;
   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase();

   if (command === 'command') {
      client.commands.get('command').execute(message, args, Discord);
   }
   if (command === 'reactionrole') {
      client.commands.get('reactionrole').execute(message, args, Discord,client);
   }
   else if (command == 'clear') {
      client.commands.get('clear').execute(message, args);
   }
   else if (command == 'ping') {
      client.commands.get('ping').execute(message, args);
   }
   else if (command == 'kick') {
      client.commands.get('kick').execute(message, args);
   }
   else if (command == 'mute') {
      client.commands.get('mute').execute(message, args);
   }
   else if (command == 'unmute') {
      client.commands.get('unmute').execute(message, args);
   }
   else if (command == 'ban') {
      client.commands.get('ban').execute(message, args);
   }
   else if (command == 'youtube') {
      client.commands.get('youtube').execute(message, args);
   }
   else if (command == 'play') {
      client.commands.get('play').execute(message, args);
   }
   else if (command == 'leave') {
      client.commands.get('leave').execute(message, args);
   }
});














client.login('ODA1MDUwMjQ4Mzc2MDkwNjM0.YBVPeA.RkDMnJDbhEyQ3H6uvUnseX0nyZk');
