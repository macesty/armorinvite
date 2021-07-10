module.exports = {
  name: "log-sil",
  code: `
$awaitMessages[$authorID;30s;evet,hayır;logsil,logsilme;30 saniye geçtiği için işlem iptal oldu.]
$color[BLUE]
$description[
Log kanalını silmek istediğinizden eminmisiniz? (Davet verileri silinmez)]
$footer[Silmek için "evet" iptal etmek için "hayır" yazın | 30 saniye içerisinde cevapla!]
$onlyPerms[admin;$getServerVar[adminperm]]
$onlyBotPerms[admin;$getServerVar[botaperm]]
`
}