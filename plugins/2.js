let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `if you find an error message, report it using this command\n\nexample:\n${usedPrefix + command} good afternoon owner, I found the following error <copy/tag the error message>`
    if (text.length < 10) throw `gblk abbreviation, minimum 10 characters!`
    if (text.length > 1000) throw `do you report or vent?, maximum 1000 characters!`
    let teks = `*${command.toUpperCase()}!*\n\nFrom : *@${m.sender.split`@`[0]}*\n\nOrder : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Sent message owned by the bot, if ${command.toLowerCase()} just kidding will not be accepted._`)
}
handler.help = ['report', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
export default handler