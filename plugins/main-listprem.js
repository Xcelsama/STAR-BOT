
let handler = async (m, { conn, args, usedPrefix, command }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid) 
let teks = `▢ *PREMIUM USERS OF ROMEK
*\n─────────────\n` + prem.map(v => '- @' +919341378016 v.replace(/@.+/, '')).join`\n`
m.reply(teks, null, {mentions: conn.parseMention(teks)})

}
handler.help = ['listprem']
handler.tags = ['main']
handler.command = ['listprem', 'premlist', 'listpremium'] 

export default handler
