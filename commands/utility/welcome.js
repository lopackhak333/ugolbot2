client.on('guildMemberAdd', msg => { // Commands Go Inside The client.on('message', 
msg => )
msg.guild.channels.get('880004225873113115').send({embed: {
color: 3447003,
author: {
  name: client.user.username,
  icon_url: client.user.avatarURL
},
title: "Добро пожаловать на наш сервер UgolMine!",
url: "https://ugolbots.sytes.net",
description: "@MEMBER",
estamp: new Date(),
footer: {
  icon_url: client.user.avatarURL,
  text: "© Example"
}
