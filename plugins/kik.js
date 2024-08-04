let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    if (/^([\u0000-\u00ff]+)kickall$/i.test(text)) {
        if (!isAdmin) return m.reply('Only admins can use this command!')
        for (let user of participants.map(u => u.id).filter(v => v !== conn.user.jid)) {
            await conn.groupRemove(m.chat, [user])
        }
        m.reply('All members kicked from the group!')
    }
}

handler.help = ['kickall']
handler.tags = ['group']
handler.command = ['kickall']
handler.admin = true
handler.group = true

export default handler