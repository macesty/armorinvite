module.exports = {
  name: "log-ayarla",
  code: `
$description[Log kanalı <#$mentionedChannels[1]> olarak ayarlandı.]
$color[BLUE]
$setServerVar[inviteenabled;Açık]
$setServerVar[logkanal;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;Lütfen kanal etiketleyin.]
$onlyPerms[admin;$getServerVar[adminperm]]
$onlyBotPerms[admin;$getServerVar[botaperm]]
`
}