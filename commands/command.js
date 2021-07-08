module.exports={
    name: 'command',
    description: "Embeds",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Rules')
        .setURL('https://www.youtube.com')
        .setDescription('this is Embed for thr server rules')
        .addFields(
            {name: 'Rule 1', value: 'Be nice'},
            {name: 'Rule 2', value: 'share memes'},
            {name: 'Rule 3', value: 'do what ever you want'}
        )
        .setImage('https://pixabay.com/photos/coding-computer-hacker-hacking-1841550/')
        .setFooter('Make sure to check out the rules channel');

        message.channel.send(newEmbed);
    }
}