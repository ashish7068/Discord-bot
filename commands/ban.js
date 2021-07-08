module.exports={
    name: 'ban',
    description: "this command bans the member",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
        const memberTarger = message.guild.members.cache.get(member.id);
        member.Targer.ban();
        message.channel.send("User has been banned");
        } else {
            message.channel.send("You couldnt ban that member");
        }
    }
}