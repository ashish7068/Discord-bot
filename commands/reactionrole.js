module.exports = {
    name: 'reactionrole',
    description: "this is reaction role command!",
    async execute(message, args, Discord, client) {
        const channel = '806510628302618655';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Yellow Team");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Blue Team");

        const yellowTeamEmoji = '🐣';
        const blueTeamEmoji = '🐰';
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a Team to Play on!')
            .setDescription('Choosing a team will  allow you to intract with ypur teammates! \n\n'
                + `${yellowTeamEmoji} for yellow team \n`
                + `${blueTeamEmoji} for blue team`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamEmoji);

                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamEmoji);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamEmoji);

                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamEmoji);
                }
            } else {
                return;
            }
        });
    }
}