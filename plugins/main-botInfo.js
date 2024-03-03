import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  
  let neww = performance.now()
  let speed = neww - old
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './XLICON.jpg')
let user = global.db.data.users[who]
  
let infobt = `
🌠 *ᏆΝҒϴ:-ՏͲᎪᎡ-ᎷᎠ-Ꮩ2* 🌠

╭───•••✧ᎠᎬᏙᎬᏞϴᏢᎬᎡ✧••••───╮
┃ *≡*. 
│ ➫「 *ՏͲᎪᎡ-ᎷᎠ-Ꮩ2* 」
│ ➫ *Name    :* Excel
│ ➫ *Place   :* Nigeria
│ ➫ *Gender  :*  ᴍᴀʟᴇ
│➫ *Age     :* _15
│ ➫ *Phone   :* wa.me/2347045035241
│ ➫ *TT      :*  https://tiktok.com
┃/@xcelsama
│ ➫ *GitHub  :* https://github.com/Xcelsama
│ ➫ *TT *:- https://tiktok.com/@xcelsama
│ ➫ *Channel* :https://whatsapp.com/
┃channel/0029Va9wmuz8F2pGIURwmo0m
│ ➫ *Status  :* ᎠᎬᏴႮᏀᏀᏆΝᏀ ᏟϴᎠᎬ._
┃ 
┃© STAR-MD-V2 BY EXCEL
┃
┃
┃
⚡ *STATE* ⚡
➫ *${groupsIn.length}* GROUP CHATS
➫  *${groupsIn.length}* united groups
➫  *${groupsIn.length - groupsIn.length}* abandoned groups
➫  *${chats.length - groupsIn.length}* private chats
➫  *${chats.length}* Total Chats


 *🕣 S E R V E R*
*🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 FreeRAM:* ${format(freemem())}

*≡  NodeJS memory *
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
`
conn.sendFile(m.chat, pp, 'prefil.jpg', infobt, m, false, { mentions: [who] })
m.react(done)

}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['info', 'infobot', 'botinfo']

export default handler
