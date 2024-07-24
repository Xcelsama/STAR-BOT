import { otakudesu } from 'hxz-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Use example ${usedPrefix}${command} Anime`
    let result = await otakudesu(text)
    let datathumb = await(await fetch(result.img)).buffer()
    let otaku = `
💌 *TITLE:* ${result.judul}
🎌 *JAPAN:* ${result.jepang}
⭐ *RATE:* ${result.rate}
📚 *PRODUCER:* ${result.produser}
📌 *TIPE:* ${result.tipe}
🎈 *STATUS:* ${result.status}
🎐 *EPISODE:* ${result.episode}
🪧 *DURATION:* ${result.durasi}
📒 *RELEASE:* ${result.rilis}
📕 *STUDIO:* ${result.studio}
📗 *GENRE:* ${result.genre}
📔 *DESC:* ${result.desc}
📓 *BATCH:* ${result.batch}

🧷 *BATCHSD:* ${result.batchSD}

📎 *BATCHHD:* ${result.batchHD}
`
await conn.sendButtonImg(m.chat, datathumb, otaku, wm, 'menu', '.menu', m)
}

handler.help = ['otakudesu'].map(v => v + ' <Apa>')
handler.tags = ['new']
handler.command = /^(otakudesu)$/i

export default handler