module.exports = {
    name: 'clear',
    description: "Clears Messages!",
    async execute(message, args){
        if(!args[0]) return message.reply("Please Enter the Amount of Messages You Want to Clear!")
        if(isNaN(args[0])) return message.reply("Please Enter a Real Number!")

        if(args[0] > 100) return message.reply("You Cannot Delete more than 100 Messages at Once!")
        if(args[0] < 1) return message.reply("You Must Delete More than 1 Message!")

        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        })
    }
}