const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Turning On Bot");
    bot.user.setActivity("New Users", { type: 2 });
});

bot.on('guildMemberAdd', member => {
    console.log(`${member}`, "has joined" + `${member.guild.name}`);
    let channel = member.guild.channels.find(x => x.name === '✅welcome-leave✅');
    let role = member.guild.roles.find(f => f.name == 'NoobSpamer');
    let memberavatar = member.user.avatarURL;
    if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true)
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp();

    channel.send(embed);
    member.addRole(role);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now");
    console.log("Leave Message Sent");
    let channel = member.guild.channels.find(x => x.name === '✅welcome-leave✅');
    let memberavatar = member.user.avatarURL;
    if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has Let the Server', ';(')
        .addField('Bye Bye :(', 'We will all miss you!')
        .addField('The server now as', `${member.guild.memberCount}` + " members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp();

    channel.send(embed);
});


bot.login("NTUwNjc5ODI4MDM1MjcyNzA1.D1mTIg.YTG7YD689edZnscjvCQcSgDGFoc");
