import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 Developer Bot `, `ɪɴɴᴏᴄᴇɴᴛ ᴍᴏʀᴇ ᴛʜᴀɴ ɢᴏᴏɢʟᴇ`, `ms.excel.amadi@gmail.com`, `🇧🇩 Bangladesh`, `🐙 https://github.com/Xcelsama `, `👑 ᴏᴡɴᴇʀ STAR-BOT `],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ`, `📵 ᴅᴏɴᴛ sᴘᴀᴍ/ᴄᴀʟʟ ᴍᴇ 😢`, `ɴᴏᴛʜɪɴɢ`, `🇳🇬 Nigeria `, `🐙 https://github.com/Xcelsama/STAR-BOT `, `🤖 STAR-BOT `]
  ], fkontak)
  await m.reply(`Listen baby @${m.sender.split('@')[0]}, That's My Owner Don't be over, Okay? 😃\nTry to be polite\nDon\t call him or you will be ignored`)
  } 
handler.help = ['creator']
handler.tags = ['info']

handler.command = /^(creator)$/i

export default handler