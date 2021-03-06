// Main bot function
const advice = require('./functions/advice');
const help = require('./functions/help')
const stars = require('./functions/stars');
// const mood = require('./functions/mood');
const tod = require('./tod');

const Discord = require('discord.js');
const client = new Discord.Client();

const date = new Date();
const prefix = "~";

const commands = {
    'advice': advice.give_advice,
    'help': help.list_commands,
    'stars': stars.get_star_rating,
    // 'mood': stars
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.content.toLowerCase().includes("hi cassie") && msg.author.id != "786776537524863006") {
        current_tod = tod.current_tod(date.getHours())
        msg.channel.send(`Hi <@${msg.author.id}>! ^_^ Hope you're doing well ${current_tod}.`)
    };

    if(!msg.content.startsWith(prefix)) return;
    if(msg.content.substring(1).startsWith(prefix)) return;
    
    if(msg.author.id === process.env.USER_ID){
        if(msg.content.startsWith(`${prefix}introduceyourself`)){
            msg.channel.send("Hello @everyone!👋 My name is Cassie (short for Cassiopeia) and the stars whisper their secrets to me every night 🌠🙏🌟. It's nice to meet all of you~ \n I respond to commands begining with ~. Please use ~help anytime and I'll let you know about my abilities 🔮👁️🪄! \n Also I love saying hi!! If you ever want to reach out, 'Hi Cassie' should do the trick 😊.");
        };
    };

    command = msg.content.slice(prefix.length).toLowerCase();

    if(Object.keys(commands).includes(command)){
        commands[command](msg);
    }else{
        if(command != "introduceyourself"){
            msg.channel.send("Sorry, I don't understand what " + command + " means... 😞");
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
