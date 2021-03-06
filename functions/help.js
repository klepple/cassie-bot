const date = new Date();

module.exports = {
    list_commands: function (msg){
        surround = "```"
        title = "✨ What would you like to hear about today? ✨"
        // Commands
        advice = "~advice: I will consult the stars and give you some advice!"
        stars = "~stars: I will ask the stars to rate the categories of your life."
        help = "~help: I will repeat this again uwu"

        msg.channel.send(surround + "\n" + title + "\n" + advice + "\n" + help + "\n" + surround)
    }
}