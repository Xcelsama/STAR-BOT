import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭───[𝚂𝚃𝙰𝚁-𝙱𝙾𝚃]───╮
│╭────────────────────
┴│👋 Hey there, ${conn.getName(m.sender)}!
⬡│🤖 𝙸'𝚖 𝚂𝚃𝙰𝚁-𝙱𝙾𝚃 \n⬡│ I'm up and running! 🚀
│╰────────────────────
┠───[ BOT INFO ]────╮
│╭────────────────────
┴│       𝚂𝚃𝙰𝚁-𝙱𝙾𝚃
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 𝚇𝚌𝚎𝚕𝚜𝚊𝚖𝚊 🇳🇬
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/2347045035241
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ HOW TO USE ]────⋆
┴│💡 Some commands you can use:
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .translate \n⬡│- Translates text to other lang
│╰──────────────
╰────────═┅═───────
*Thank you for choosing SRAR-BOT 🌟✨*
`.trim()
  m.reply(caption)
}
handler.help = ['bot']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler