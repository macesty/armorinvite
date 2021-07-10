module.exports = {
  name: "davet-ödül",
  code: `
  $color[BLUE]
  $description[Ödül rol <@&$mentionedRoles[1]> davet sayısı $noMentionMessage olarak ayarlandı.]
  $setServerVar[odulrolenabled;açık]
  $setServerVar[odulsayi;$noMentionMessage]
  $setServerVar[odulrol;$mentionedRoles[1]]
  $onlyIf[$isNumber[$noMentionMessage]==true;Lütfen sadece sayı girin.]
  $onlyIf[$noMentionMessage!=;Lütfen davet sayısı girin.]
  $onlyIf[$highestRole[$clientID]<$mentionedRoles[1];Etiketlediğiniz rol benim rolümden yüksek olduğu için bu işlemi yapamam. \`Rolümü en üste taşıyın\`]
  $onlyIf[$mentionedRoles[1]!=;Lütfen bir ödül rolü etiketleyin.]
  $onlyPerms[admin;$getServerVar[adminperm]]
  $onlyBotPerms[admin;$getServerVar[botaperm]]
`
}