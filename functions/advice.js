const tod = require('../tod');

const date = new Date();

module.exports = {
    give_advice: function (msg){
        // Message components
        username = `<@${msg.author.id}>`
        upcoming_tod = tod.upcoming_tod(date.getHours())
        negative_vibe = negative_vibes[Math.floor(Math.random() * negative_vibes.length)];
        positive_vibe = positive_vibes[Math.floor(Math.random() * positive_vibes.length)];
        advice = advices[Math.floor(Math.random() * advices.length)];
        star_emotion = star_emotions[Math.floor(Math.random() * star_emotions.length)];
        
        advice = `Hello ${username}! Here's my advice for you: You're kind of ${negative_vibe}, but ${positive_vibe}! You should ${advice} ${upcoming_tod}. The stars are looking down on you with ${star_emotion} 🌠.`
        msg.channel.send(advice)
    }
}

negative_vibes = [
    "a bad person",
    "not reaching your full potential",
    "lost right now",
    "acting like nothing is wrong even though everything is wrong oh god",
    "feeling negatively about astrology",
    "zoning out",
    "not listening to the concern of others",
    "jittery",
    "restless",
    "cold",
    "forgetting to focus on yourself",
    "totally neglecting all your responsibilities lately",
    "confused about everything",
    "???",
    "a big mess",
    "stinky",
    "moody",
    "absent lately",
    "not at your best right now",
    "spiralling anxiously",
    "stuck thinking you're alone",
    "trapped in your own mind",
    "unable to see the big picture",
    "only thinking about the past",
    "oblivious to the good things that surround you",
    "helpless in the face of adversity",
    "sad that video killed the radio star",
    "sluggish and lazy",
    "blaming your problems on others",
    "too scared of the future",
    "being a pain lately",
    "Kahlia's dad right now",
    "dealing with a lot of existential dread",
    "like a craft glue stick that's all dried up",
    "soggy",
    "acting sus lately",
    "stretched thinly and reaching a breaking point",
    "laggy",
    "acting fragmented and scatterbrained"
]

positive_vibes = [
    "everyone loves you",
    "don't ever give up on your dreams",
    "you're a good person deep down and others can see it within you",
    "tomorrow will bring positive vibes for you",
    "you'll continue to grow for the better",
    "the universe is smiling at you - you should smile back sometime",
    "everyone believes in you",
    "you can do it. No really, you can!!",
    "you're lookin' real cute today ;)",
    "you're also kind of awesome",
    "good vibes are coming for you",
    "things will get better shortly",
    "giiiiirl, you're absolutely  c r u s h i n g  it",
    "you shine bright like the stars themselves",
    "you've been learning and flourishing succesfully",
    "the universe has something special in store for you",
    "you'll be motivated soon, the stars can feel it",
    "you're passionate about... well, your passions",
    "I'm never gonna give you up, never gonna let you down",
    "everyone is impressed by the things you've acheived so far",
    "you're killin' it",
    "the stars told me they think you're hot",
    "you sparkle when you enter the room",
    "you're like, the absolute best at video games",
    "you shine bright like a diamond",
    "you're gonna look immaculate tomorrow",
    "you remind the stars of the fresh smell after a spring shower - they can't get enough of you",
    "keep an eye out for crunchy leaves. If you see one, you should step on it",
    "things will get better soon",
    "you will be carried gently by the winds of the future",
    "your future looks super chill",
    "you're so unique! No one does it quite like you :)",
    "the stars keep whispering excitedly about your future"
]

advices = [
    "brush your teeth",
    "live fast, die hard",
    "check your horoscope",
    "write down your feelings",
    "go hard or go home",
    "wash your feet - they kinda stink :/",
    "change your pants. These ones are messing with your aura",
    "clean your desk",
    "tell someone you appreciate them",
    "make a list",
    "believe in life after love",
    "drink some water",
    "fix your posture",
    "stop and smell the flowers sometime",
    "rest more",
    "listen to your friends' advice",
    "listen to yourself",
    "be more open and honest about your feelings",
    "be more realistic",
    "take out the trash from your life",
    "do some self-reflection",
    "play a video game",
    "express yourself more",
    "tell someone you love them",
    "move on from that thing (you know the one)",
    "eat a potato",
    "become one with the trees",
    "strive to improve",
    "look in the mirror",
    "be a hoe and do it",
    "kick names and take ass",
    "not eat yellow snow",
    "not go to 1154 Fairview Lane",
    "seek professional assistance",
    "be patient and the rewards will come",
    "remove the fruitfly from your nose",
    "become a warlock",
    "uninstall league",
    "remember the inevitable heat death of the universe and the transcendentality of it all",
    "go for a quick walk",
    "go feel some wet grass on your bare feet",
    "google some cute pet pictures",
    "not abandon Jerome",
    "congratulate your friendly neighbourhood star bot on a job well done ;)",
    "steal the decleration of independence",
    "liberate Jerome",
    "shoot the bad guys",
    "grab some socks",
    "stop thinking you can solve your problems alone and ask someone for help",
    "stop worrying your friends/family secretly hate you, you're not an imposter... unless you are one",
    "go for the style points",
    "eat the cookie"
]

star_emotions = [
    "love",
    "concern",
    "awe",
    "confusion",
    "pride",
    "warmth",
    "comfort",
    "admiration",
    "delight",
    "distrust",
    "fear",
    "amusement",
    "satisfaction",
    "compassion",
    "worry",
    "joy",
    "relief",
    "mild disappointment",
    "frustration",
    "surprise",
    "peace",
    "acceptance",
    "amusement",
    "kindness",
    "sexiness ;)",
    "fascination",
    "wonder",
    "amazement",
    "determination",
    "curiosity"
]
