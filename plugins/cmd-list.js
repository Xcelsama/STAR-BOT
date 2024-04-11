//import db from '../lib/database.js'

let handler = async (m, { conn }) => {
    conn.reply(m.chat, `
┌─❖『 *_SECRET_MENU_* 』❖
┃❏*perv
┃❏*handsome
┃❏*hot
┃❏*sexy
┃❏*ugly
┃❏*cute
┃❏*playboy
┃❏*playgirl
┃❏*beautiful
┃❏*lesbian
┃❏*whore
┃❏*motherfucker
┃❏*sucker
┃❏*horny
┃❏*foolish
┃❏*nibba
┃❏*nibbi
┃❏*bitch
┃❏*waifu
┃❏*crackhead
┃❏*rascal
┃❏*idiot
┃❏*girlyboy
┃❏*tomboy
┃❏*gigachad
┃❏*mf
┃❏*introvert
┃❏*extrovert
┃❏*sigma
┃❏*psycho
┃❏*brainless
┃❏*useless
┃❏*singer
┃❏*image
┃❏*meme
┃❏*quote
╰─────────────────❖
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `(bloqueado) ${key}` : key} : ${value.text}`).join('\n')}

`.trim(), null, {
        mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
    })
}


handler.help = ['secret']
handler.tags = ['main']
handler.command = ['secret']

export default handler
