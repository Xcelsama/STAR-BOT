import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

let msg = `Neko Overpowered Image 👙🥵`
let endpoint = `https://shizoapi.onrender.com/api/nsfw/neko2?apikey=${shizokeys}`
const response = await fetch(endpoint);
if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'shizo.techie.error.png', msg, m, null, rpgc);
    } else {
      throw bug
    }
}

handler.tags = ['nsfw']
handler.help = handler.command = ['ns2neko']
handler.nsfw = true
export default handler