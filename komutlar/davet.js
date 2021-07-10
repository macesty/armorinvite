module.exports = {
  name: "davet",
  code: `
  $description[
  👥 | Tümü (Fake & Gerçek ) - $sum[$userInfo[real;$mentioned[1;yes]];$userInfo[fake;$mentioned[1;yes]]]
  ✨ | Toplam Giren Gerçek - $userInfo[real;$mentioned[1;yes]]
  💩 | Toplam Giren Fake - $userInfo[fake;$mentioned[1;yes]]
  
  ****Davet Rol Sistemi****
  $replaceText[$replaceText[$getServerVar[odulrolenabled];açık;<@&$getServerVar[odulrol]> Rolünü **$sub[$getServerVar[odulsayi];$userInfo[real;$mentioned[1;yes]]]** Davet sonra alabileceksin.;-1];kapalı;Davet rol sistemi kapalı.;-1]]
  $author[Davet İstatiğin;$userAvatar[$mentioned[1;yes]]]
  $color[BLUE]
`
}