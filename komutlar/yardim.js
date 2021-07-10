module.exports = {
  name: "yardım",
  aliases: ["help"],
  code: `
  $description[Invite sistem durumu: $getServerVar[inviteenabled]]
  $addField[Yetkili Komutları;
__$getServerVar[prefix]log-ayarla__ | Davet log kanalı ayarlarsınız
__$getservervar[prefix]log-sil__ | Davet log kanalını silersiniz
__$getservervar[prefix]davet-ödül__ | Belirli davet yapan kişilere rol veren sistemi ayarlarsınız
__$getservervar[prefix]davet-ödül-sil__ | Davet ödül sistemini silersiniz
__$getservervar[prefix]davet-sil__ | Etiketlediğiniz üyenin davet sayısını sıfırlarsınız
__$getservervar[prefix]prefix__ | Botun prefixini ayarlarsınız]
  $addField[Genel Komutlar;
__$getServerVar[prefix]ödül-al__ | Belirli bir davet sayısına ulaştığınızda bu komut ile rol alırsınız
__$getservervar[prefix]davet__ | Davet sayınıza bakarsınız
__$getServerVar[prefix]ping__ | Botun pingine bakarsınız]
  $author[$username[$clientID] - Yardım listesi;$userAvatar[$clientID]]
  $color[BLUE]
  `
}