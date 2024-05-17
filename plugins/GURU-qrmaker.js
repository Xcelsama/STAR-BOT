import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `*ɢɪᴠᴇ ʀᴏᴍᴇᴋ-xᴅ ᴛᴇxᴛ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', 'Here u go', m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <text>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
export default handler
