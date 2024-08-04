import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

let msg = `Pussy Image 🌝🥵`
let endpoint = `https://shizoapi.onrender.com/api/nsfw/pussy?apikey=${shizokeys}`
const response = await fetch(endpoint);
if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'null);
    } else {
      throw bug
    }
}

handler.tags = ['nsfw']
handler.help = handler.command = ['pussy']
handler.nsfw = true
export default handler