var Aoijs = require("aoi.js");
var fs = require("fs");

var bot = new Aoijs.Bot({
  token: process.env.TOKEN,
  prefix: "$getServerVar[prefix]",
  fetchInvites: true
});


var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./komutlar/${file}`);
  bot.command({
    name: command.name,
    code: command.code,
    aliases: command.aliases
  });
}

//status
bot.status({
  text: "Armor Development - Invite bot",
  type: "PLAYING",
  time: 12
})


bot.variables({
  inviteenabled: "kapalı",
  prefix: "+",
  adminperm: "{color:RED} {title:Yetkiniz Yetersiz.} {description:Log kanalı ayarlayabilmek için `Yönetici` Yetkisine sahip olun.}",
  botaperm: "{color:RED} {title:Yetkim Yetersiz.} {description:Lütfen `Yönetici` Yetkisi verdiğinizden emin olun}",
  logkanal: "",
  odulrolenabled: "kapalı",
  odulsayi: "",
  odulrol: "",
})

//callbacks
bot.onMessage() 
bot.onMessageDelete()
bot.onJoined()
bot.onLeave()

bot.command({
  name: "eval",
  code: `
  $eval[$message]
  $onlyForIDs[$botOwnerID;]
  `
})

//lpgislem
bot.awaitedCommand({
  name: "logsil",
  code: `
  $color[BLUE]
  $description[Log kanalı silindi ve sistem durduruldu. Tekrar log kanalı ayarlayarak sistemi açabilirsiniz]
  $setServerVar[logkanal;]
  $setServerVar[inviteenabled;Kapalı]
`
})
bot.awaitedCommand({
  name: "logsilme",
  code: `
  $color[BLUE]
  $description[İşlem başarıyla iptal edildi.]
`
})

//odulrol
bot.command({
  name: "ödül-al",
  code: `
  $giveRoles[$authorID;$getServerVar[odulrol]]
  $onlyIf[$userInfo[real;$authorID]>=$getServerVar[odulsayi];Davet sayınız yetersiz]
  $onlyIf[$getServerVar[odulrolenabled]==açık;Davet ödül sistemi kapalı]
`
})

//odulrolislem
bot.awaitedCommand({
  name: "odulsil",
  code: `
  $color[BLUE]
  $description[Davet ödül sistemi kapatıldı.]
  $setServerVar[odulrolenabled;kapalı]
  $setServerVar[odulrol;]
  $setServerVar[odulsayi;]
`
})
bot.awaitedCommand({
  name: "odulsilme",
  code: `
  $description[İşlem iptal edildi.]
  $color[BLUE]
`
})

bot.joinCommand({
  channel: "$getServerVar[logkanal]",
  code: `
📥 | **$userTag[$authorID]** Sunucuya Katıldı
✨ | Davet Eden **$userTag[$userInfo[inviter]]**
🔢 | Toplam Davet Sayısı **$sum[$userInfo[real];$userInfo[fake]]**
`
})
bot.leaveCommand({
  channel: "$getServerVar[logkanal]",
  code: `
  📤 | **$userTag[$authorID]** Sunucudan Ayrıldı
  ✨ | Davet Eden **$userTag[$userInfo[inviter]]**
  🔢 | Toplam Davet Sayısı **$sum[$userInfo[real];$userInfo[fake]]**
`
})

bot.command({
  name: "<@",
  code: `
  $onlyIf[$checkContains[$message;<@$clientID>]==true;Komutlarıma ulaşmak için \`$getServerVar[prefix]yardım\` Yazın!]
`,
  nonPrefixed: true
})