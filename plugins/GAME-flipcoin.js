let handler = async(m, { conn, args }) => {
    let coinFlip = Math.floor(Math.random() * 2) + 1;
    if (coinFlip === 1) { 
        conn.reply(m.chat, `Tail 🪙`, m);
    } else { 
        conn.reply(m.chat, `Head 🪙`, m);
    }
}
handler.help = ['flipcoin'];
handler.tags = ['game'];
handler.command = /^(flip|flipcoin)$/i;

export default handler;