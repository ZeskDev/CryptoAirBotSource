const Discord = require("discord.js"),
  client = new Discord.Client(),
  fetch = require("node-fetch");
client.on('message', async (msg) => {
  let message = msg;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = msg.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();
  if (command == "btc") {
    let embed = new Discord.MessageEmbed();
    let currency = args[1];
    if (!args[1]) {
      return message.channel.send("Specify a currency");
    }else{
      let tipo;
      if (currency == "eur", "EUR", "USD", "usd", "GBP", "gbp") {
        if (currency == "EUR", "eur") tipo = "EUR";
        if (currency == "USD", "usd") tipo = "USD";
        if (currency == "GBP", "gbp") tipo = "GBP";
        fetch('https://api.coinreference.xyz/index.php?url=/price/BTC/'+tipo).then(res=>res.json()).then((data) => {
          if (data == "") {
          
          }else{
            if (data.status == "success") {
              embed.setColor("RANDOM");
              embed.setTitle("Stats for Bitcoin");
              embed.addField("Current price in "+tipo+", data.price);
              embed.setFooter("Crypto Air Bot, API from coinreference.xyz");
              message.channel.send(embed);
            }else{
              embed.setColor("RED");
              embed.setTitle("ERROR Ocurred");
              message.channel.send(embed);
            }
          }
        });
      }
    }
  }
});
client.login(require("./config.json").token);
