let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
    let member = participants.map((u) => u.id)
    let random = member[Math.floor(Math.random() * member.length)]
    let command_name = m.text.substring(prefix.length).split(" ")[0]
    let ments = [random]
    let message = `Thw Most *${command}* is @${random.split("@")[0]}  📝`
    conn.sendMessage(m.chat, { text: message, mentions: [ments] }, { quoted: m })

}
handler.help = ["perv", "handsome", "hot", "sexy", "ugly", "cute", "playboy", "playgirl", "beautiful", "lesbian", "whore", "motherfucker", "sucker", "horny", "foolish", "nibba", "nibbi", "bitch", "waifu", "crackhead", "rascal", "idiot", "girlyboy", "tomboy", "gigachad", "mf", "introvert", "extrovert", "sigma", "psycho", "brainless", "useless", "singer"]
handler.tags = ['fun']
handler.command = /^(perv|handsome|hot|sexy|ugly|cute|playboy|playgirl|beautiful|lesbian|whore|motherfucker|sucker|horny|foolish|nibba|nibbi|bitch|waifu|crackhead|rascal|idiot|girlyboy|tomboy|gigachad|mf|introvert|extrovert|sigma|psycho|brainless|useless|singer)/i
handler.group = true
export default handler