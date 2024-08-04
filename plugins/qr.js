import { toDataURL } from 'qrcode'
let handler = async (m, { text, conn }) => {
if (!text) throw `Enter Text or Link that Converted in QR Code`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', maker, m)
}
handler.help = ['', 'code'].map(v => 'qr' + v + ' <text/link>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
export default handler