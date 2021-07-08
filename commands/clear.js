module.exports={
    name: 'clear',
    description: "clear messages!",
  async  execute(message, args){
        if(!args[0])return message.reply("Please! enter the amount of message that you want to delete. ");
        if(isNaN(args[0])) return message.reply("please! enter a real no.");

        if(args[0]> 100) return message.reply("You cant delete message more than 100");
        if(args[0]<1) return message.reply("You must delete atlest one message");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}