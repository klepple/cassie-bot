
module.exports = {
    get_star_rating: function (msg){
        username = `<@${msg.author.id}>`;
        message = `🌠 The stars have spoken!✨ ${username}, here are your ratings:\n`;
        categories.forEach(function(category) {
            // Between 0 and 5 times.
            rating = rate(star, Math.random() * Math.floor(5));
        
            line = category.concat(rating);
            line = line.concat("\n");

            message = message.concat(line);
        });
        msg.channel.send(message);
    }
}

function rate(star, times) {
    // For times times, concatenate a star to the rating.
    rating = "";
    while (times > 0) {
        rating = rating.concat(star);
        times--;
    }
    return rating
}

star = "⭐";
categories = [
    "Sex: ",
    "Hustle: ",
    "Vibe: ",
    "Success: "
];
