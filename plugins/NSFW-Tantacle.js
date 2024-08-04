import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

let msg = `Tantacle Image 🥵🌝😂`
let endpoint = `https://shizoapi.onrender.com/api/nsfw/tantacle?apikey=${shizokeys}`
const response = await fetch(endpoint);
if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'shizo.techie.error.png', msg, m, null, rpig);
    } else {
      throw bug
    }
}

handler.tags = ['nsfw']
handler.help = handler.command = ['tantacle']
handler.nsfw = true
export default handler