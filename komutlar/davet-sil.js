module.exports = {
  name: "davet-sil",
  code: `
  $description[
<@$mentioned[1]> Adlı üyenin bütün davetleri silindi.]
  $color[BLUE]
  $replaceText[$replaceText[$resetInvites[$guildID;$mentioned[1]];true;;-1];false;;-1]
  $onlyIf[$mentioned[1]!=;Lütfen bir üye etiketleyin.]
  $onlyPerms[admin;$getServerVar[adminperm]]
  $onlyBotPerms[admin;$getServerVar[botaperm]]
`
}