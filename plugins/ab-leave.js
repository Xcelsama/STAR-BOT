let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Byee Guys bot will exit now , , (´༎ຶ ͜ʖ ༎ຶ `)♡', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'out']
handler.tags = ['owner']
handler.command = /^(out|leavegc)$/i

handler.rowner = true

export default handler
