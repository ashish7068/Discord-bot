module.exports = async (client) => {
const guild = client.guilds.cache.get('805053093271961621');
setInterval(() => {
    const memberCount = guild.memberCount;
    const channel = guild.channels.cache.get('807119910819201026');
    channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    console.log('Updating Member count ');

}, 500000);

}