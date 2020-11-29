module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FDD14B')
        .setTitle('Ping')
        .setURL('https://discord.com/')
        .setDescription('Ping Embed')
        .addFields(
            {name: 'Ping 1', value: 'Be Nice'},
            {name: 'Ping 2', value: 'Be Nice'},
            {name: 'Ping 3', value: 'Be Nice'},
            {name: 'Ping 4', value: 'Be Nice'},
            {name: 'Ping 5', value: 'Be Nice'},
            {name: 'Ping 6', value: 'Be Nice'}
        )
        .setImage('https://media.wired.com/photos/5e1e646743940d0008009167/1:1/w_1533,h_1533,c_limit/Science_Cats-84873657.jpg')
        .setFooter('Look at Rules Channel!');

        message.channel.send(newEmbed)
    }


}