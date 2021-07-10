module.exports = {
  name: "prefix",
  aliases: ["ön-ek"],
  code: `
  $description[Yeni ön ek \`$message[1]\` Olarak ayarlandı.]
  $color[BLUE]
  $setServerVar[prefix;$message[1]]
  $onlyIf[$argCount[$message[1]]<=4;Ön ek max 4 karakter içerebilir!]
  $onlyIf[$message[1]!=;Lütfen yeni ön ek girin.]
  $onlyPerms[admin;$getServerVar[adminperm]]
  $onlyBotPerms[admin;$getServerVar[botaperm]]
`
}