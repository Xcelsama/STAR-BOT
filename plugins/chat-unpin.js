let handler = async (m, { conn, args }) => {
conn.reply(m.chat, 'Chat Unpinned 🖇️🔫', m)
await conn.chatModify({ pin: false }, m.chat)
}

handler.help = ['unpin']
handler.tags = ['owner']
handler.command = ['unpin']
handler.owner = true 
export default handler