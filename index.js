let Discord = require("discord.js"); 
const { prefix } = require('./settings/config.js')

let client = new Discord.Client(); 

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
 res.send('Hello World!')
})

app.listen(port, () => {
 console.log(`listening at http://localhost:${port}`)}
)

   const activities_list = [
        "LIGHT STORE",
        "LIGHT STORE DEVELOPS",
        "LIGHT STORE",
        "LGHT STORE", 
        "LIGHT STORE",
        "DEVELOPES BY ALEN", 
        "DEVELOPED BY ALEN"
        ]; // creates an arraylist containing phrases you want your bot to switch through.
    
    client.on('ready', () => {
      console.log(`Prefix is ${prefix}`)
  
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
            client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
        }, 30000); // Runs this every 10 seconds.
    });



client.on("message", message => {
  if(message.content.startsWith(`${prefix}purge`)){
let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
**Example:** \`_purge 50\` `)
if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")

message.channel.bulkDelete(clear)
message.channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `)
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("You dont have perms!")
} 
}
  if(message.content === "-serverinfo") {
 let embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle("Server Info")
 .setImage(message.guild.iconURL)
 .setDescription(`${message.guild}'s Information.`)
 .addField("Member Count", `This server has ${message.guild.memberCount} member(s).`)
 .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emoji(s).`)
 .addField("Roles Count", `This server has ${message.guild.roles.cache.size} role(s).`)
 message.channel.send(embed)
}



let days = Math.floor(client.uptime / 86400000);
 let hours = Math.floor(client.uptime / 3600000) % 24;
 let minutes = Math.floor(client.uptime / 60000) % 60;
 let seconds = Math.floor(client.uptime / 1000) % 60;
if(message.content === "-botinfo") {
 let embed = new Discord.MessageEmbed()
 .setTitle("ᴍʏ ɪɴꜰᴏ")
 .setColor("RED")
 .setDescription("ᴀɴ ᴜꜱᴇꜰᴜʟ ʙᴏᴛ")
 .addField(`ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ALEN`, '<@777448907684184094>')
 .addField(`Uptime:`, `${days}d ${hours}h ${minutes}m ${seconds}s`)
 .addField(`ᴀʙᴏᴜᴛ ᴍʏ ᴅᴇᴠᴇʟᴏᴘɪɴɢ`, 'ᴛʜɪꜱ ᴘʀᴏᴊᴇᴄᴛ ᴡᴀꜱ ᴄᴏᴍᴘʟᴇᴛᴇʟʏ ꜱᴇʟꜰ ᴄᴏᴅᴇᴅ ʙʏ ᴍʏ ᴅᴇᴠᴇʟᴏᴘᴇʀ ALEN. ɪᴛ ᴛᴏᴏᴋ ᴅᴀʏꜱ ᴛᴏ ʜɪᴍ ᴛᴏ ᴍᴀᴋᴇ ᴍᴇ ʀᴇᴀʟ')
 .addField(`Latency is:`, `${Date.now() - message.createdTimestamp}ms`)
 .addField(`API Latency is:`, `${Math.round(client.ws.ping)}ms`)

 .addField(`Requested by ${message.author.username}`, ':)')
 .setFooter("pretty cool project huh?")
 .setTimestamp()
 message.channel.send(embed)
}
if (message.content === "@TECHNICHAL TRIAL") {
message.channel.send("`${message.author} USE -help`")
}
if (message.content.startsWith("-say")) {
 
 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) message.reply("WHAT DO YOU WANT ME TO SAY?")
 message.delete();

 if (sentence.startsWith("-")) {
 message.reply("Are you trying to execute a command thru me? Manipulating an innocent bot?? :'( . Welp you can't")
 console.log(message.author.username + " said :- " + sentence)
 return;
 }

 if (sentence.includes("@")) {
 message.reply("you aint pinging anyone")
 console.log(message.author.username + " said :- " + sentence)
 return;
 }

 if (sentence.includes("@everyone") || sentence.includes("@here")) {
 console.log(message.author.username + " said :- " + sentence)
 message.reply("don't even think bout it")
 return;
 }

 if (sentence != "-say" || "@everyone") {
 message.channel.send(sentence);
 }
 console.log(message.author.username + " said :- " + sentence)
 } else {
 
 
}
if(message.content === "-here"){
message.channel.send("-help")
}
if(message.content === '<!@891902256440574033>'){
message.channel.send(`${prefix}help`)
}
if(message.content === `${prefix}help`) {
 let embed = new Discord.MessageEmbed()
 .setTitle("Bot Info")
 .setColor("RED")
 .setDescription(`♦️ɪɴꜰᴏ:ᴜꜱᴇ ${prefix} ʙᴇꜰᴏʀᴇ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ!`)
 .setImage('https://images-ext-2.discordapp.net/external/WqOlhFd2TF-x2xQthAazIxY2ABW-CLAVag38JfltK5A/https/media.discordapp.net/attachments/916225054390513695/916565398298701844/GIF_AN_1.gif')
.addField(`🤖ᴛʜɪꜱ ʙᴏᴛ ᴡᴀꜱ ᴍᴀᴅᴇᴅ ʙʏ ALEN`, '**◉ALEN**')
.addField(`👀ᴡᴀɴᴛ ᴛᴏ ᴋɴᴏᴡ ᴡʜᴏ ᴀᴍ ɪ `, '**◉Botinfo**')
.addField(`🖼️ɢᴇᴛ ꜱᴏᴍᴇᴏɴᴇꜱ ᴀᴠᴀᴛᴀʀ`, '**◉avatar**')
.addField(`♦️ᴛᴏ ɢᴇᴛ ᴠᴇʀɪꜰɪᴇᴅ ʀᴏʟᴇ`, '**◉verify**')
.addField(`📢ᴛᴏ ᴅᴏ ᴀɴ ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ`, '**◉announce**')
.addField(`📢ᴛᴏ ᴅᴏ ᴀɴ ᴜᴘᴅᴀᴛᴇꜱ ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ`, '**◉updates**')
.addField(`🔴ᴛᴏ ᴋɪᴄᴋ ᴍᴇᴛɪᴏɴᴇᴅ ᴜꜱᴇʀ ꜰʀᴏᴍ ᴛʜᴇ ꜱᴇʀᴠᴇʀ`, '**◉kick**')
.addField (`⚠️ᴛᴏ ɢᴇᴛ ᴀ ᴜꜱᴇʀꜱ ɪɴꜰᴏ`,'**◉whois**')
.addField(` 🆑ᴛᴏ ᴄʟᴇᴀʀ ᴍᴇꜱꜱᴀɢᴇꜱ ɪɴ ᴀ ᴄʜᴀɴɴᴇʟ`, '**◉purge**')
.addField(`⚠️ᴛᴏ ʙᴀɴ ᴍᴇᴛɪᴏɴᴇᴅ ᴜꜱᴇʀ`, '**◉ban**')
 .addField(`♦️ᴛᴏ ɢᴇᴛ ᴍᴏʀᴇ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴀʙᴏᴜᴛ ᴛʜɪꜱ ꜱᴇʀᴠᴇʀ`, '**◉severinfo**')


 .addField(`ʜᴇʀᴇ ɪꜱ ᴀʟʟ ᴏꜰ ᴍʏ ᴄᴏᴍᴍᴀɴᴅꜱ ${message.author.username}`, ':)')
 .setFooter("🤖ʙᴏᴛ ᴄᴏᴅᴇᴅ ʙʏ ALEN")


 .setTimestamp()
 message.channel.send(embed)
}


if(message.content.toLowerCase().startsWith(`${prefix}avatar`)) {
let user = message.mentions.users.first() || message.author;
let member = message.mentions.members.first() || message.member;
let e = new Discord.MessageEmbed()
.setColor("#C724B1")
.setTitle("ᴀᴠᴀᴛᴀʀ")
.setTimestamp()
.setImage(user.displayAvatarURL({ dynamic: true }))
message.channel.send(e);
};

const { MessageEmbed } = require('discord.js');
   if(message.content.toLowerCase() === `${prefix}verify`) {
let role = message.guild.roles.cache.find(role => role.name === "VERIFIED")
message.member.roles.add(role)
let embed = new Discord.MessageEmbed()
 .setTitle("Verified")
 //.setAuthor("Bot_Name Verify", "You_Can_add_Image_Here")
// .setThumbnail("You_can_add_image_here")
 .setDescription('Now U Can See All Visible Channel')
.setColor("RED")
 
 
 message.channel.send(embed)
 .then(msg => {
 msg.delete({ timeout: 5000 })
//1000 = 1 sec
//5000 = 5 sec
//10000 = 10 sec
 })
 }
if(message.content === `${prefix}verify`) {
//You can use
//if(command === "verify") {
//Its need command handler
message.delete()
}
if(message.content.startsWith(`${prefix}announce`))
if (message.member.hasPermission("MANAGE_CHANNELS"))
{
 const anntext = message.content.slice("".length).trim().split(/ +/);
anntext.shift().toLowerCase().split(" ")[0]
 let embed = new Discord.MessageEmbed()
 .setTitle("**📢ᴅʀᴏᴘ ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ**")
 .setDescription(`**${anntext.join(" ")}**`)
 .setColor("RED")
 .setThumbnail('https://media.discordapp.net/attachments/')
 .setImage ('https://cdn.discordapp.com/attachments/1359132881321984030/1360298846109958153/standard_3.gif?ex=67fa9c86&is=67f94b06&hm=ba7beeb2102049bf11b1e136b275646e2ee13da23e0157a17df2a38f19010be8&')
 .setFooter(`ᴀɴɴᴏᴜɴᴄᴇᴅ ʙʏ ${message.author.username} `)
 message.channel.send(embed)
 message.delete();
 if (!message.member.hasPermission("MANAGE_CHANNELS")) {
 message.reply("You don't have the permission to do that...")
 }
}
if(message.content.startsWith(`${prefix}updates`))
if (message.member.hasPermission("MANAGE_CHANNELS"))
{
 const anntext = message.content.slice("".length).trim().split(/ +/);
anntext.shift().toLowerCase().split(" ")[0]
 let embed = new Discord.MessageEmbed()
 .setTitle("**📢ᴜᴘᴅᴀᴛᴇꜱ**")
 .setDescription(`**${anntext.join(" ")}**`)
 .setColor("RED")
  .setThumbnail('https://media.discordapp.net/attachments')
 .setImage('https://media.discordapp.net/attachments/1357733479122731149/1357757556398882936/standard_1.gif?ex=67f15dc3&is=67f00c43&hm=88af017c585d0d1c9377e0cdb10ee598b0af26d84523af43d44f83e92b30ef79&')
 .setFooter(`ᴜᴘᴅᴀᴛᴇꜱ ᴀɴɴᴏᴜɴᴄᴇᴅ ʙʏ ${message.author.username} `)
 message.channel.send(embed)
 message.delete();
 if (!message.member.hasPermission("MANAGE_CHANNELS")) {
 message.reply("You don't have the permission to do that...")
 }
}
if (message.content.startsWith(`${prefix}kick`)) {
 if (message.member.hasPermission("KICK_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.kick().then(mem => {
 message.channel.send(`Kicked ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }
 }
 if(message.content.toLowerCase().startsWith(`${prefix}whois`)) {
let user = message.mentions.users.first() || message.author;
let member = message.mentions.members.first() || message.member;
let e = new Discord.MessageEmbed()
.setColor("#C724B1")
.setTimestamp()
.addFields({
name: "User Joined Server At",
value: member.joinedAt
}, {
name: "User Created At",
value: user.createdAt
}, {
name: "User Name & Tag",
value: user.tag
}, {
name: "User ID",
value: user.id
})
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
message.channel.send(e);
};
if (message.content.startsWith(`${prefix}ban`)) {
 if (message.member.hasPermission("BAN_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.ban().then(mem => {
 message.channel.send(`Banned ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }
 }
} )


client.login("MTQxMTA1OTkxNTExMTUzMDQ5Ng.GtxoCv._DklpfnwuQqkIJm-2UqjxJTUSSvO2E7UmFPfSM") 