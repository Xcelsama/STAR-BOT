import fetch from 'node-fetch'
let handler = async (m, {
    text,
    command,
    usedPrefix,
    conn
}) => {

var suggest = `Type the command Along with Promp 🥺`
if (!text) throw suggest
try {
    let res = await(await fetch('https://lexica.art/api/v1/search?q=' + text)).json()
    let randm = res.images
    let resul = randm.getRandom()
    await m.reply(wait)
    await conn.sendFile(m.chat, 
    resul.src, text, maker + "\n*Creative:* " + resul.prompt + '\n\n https://github.com/Xcelsama/STAR-MD-V2', m)
    } catch (e) {
    throw e
    }
}
handler.help = ["lexica"]
handler.tags = ['ai']
handler.command = ["lexica"]

export default handler