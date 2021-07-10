module.exports = {
  name: "davet-ödül-sil",
  code: `
  $awaitMessages[$authorID;30s;evet,hayır;odulsil,odulsilme;30 saniye geçtiği için işlem iptal oldu.]
  $color[BLUE]
  $description[Ödül rol sistemini sıfırlamak istiyotsanız \`evet\`, İptal etmek istiyorsanız \`hayır\` yazın.]
  $footer[30 saniye içerisinde cevap verilmezse işlem otomatik iptal olur]
  $onlyPerms[admin;$getServerVar[adminperm]]
  $onlyBotPerms[admin;$getServerVar[botaperm]]
`
}