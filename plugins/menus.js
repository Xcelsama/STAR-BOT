import axios from 'axios'

let handler = async (m, { text, conn, usedPrefix, command }) => {


 await conn.sendButton(m.chat,result, author, '', [['Menu', `${usedPrefix}menu`]], null, [['Menu 2',`${usedPrefix}menu2``]]
,[['Menu 3',`${usedPrefix}menu3``]],[['Menu 4',`${usedPrefix}menu4`]],m)

  }

handler.help = ['menus']

handler.tags = ['new']

handler.command = ['menus']

export default handler
