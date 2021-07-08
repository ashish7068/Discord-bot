module.exports={
    name: 'youtube' || ' utube',
    description: "sends youtube link!",
    execute(message, args){

        let role = message.guild.roles.cache.find(r => r.name === "Mod");
        if(message.member.roles.cache.some(r => r.name === "Mod")){
            message.channel.send('https://www.youtube.com');
        } else {
            message.channel.send('You dont have a right permission. Let me change that!');
            message.member.roles.add(role).catch(console.error);
        }
    
       
    }
}