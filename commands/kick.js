module.exports={
    name: 'kick',
    description: "this command kicks the member",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
        const memberTarger = message.guild.members.cache.get(member.id);
        member.Targer.kick();
        message.channel.send("User has been kicked");
        } else {
            message.channel.send("You couldnt kick that member");
        }
    }
}