import { photooxy } from '@shizodevs/wabotmodule';

let handler = async (m, { conn, args }) => {
let shizo = `${args}`
conn.reply(m.chat, wait, m)
  try {
    const imageUrl = await photooxy('https://photooxy.com/elegant-3d-neon-dark-metal-text-effect-online-free-416.html', shizo);
    conn.sendFile(m.chat, imageUrl, 'image.jpg', maker, m);
  } catch (error) {
   console.error(error);
    conn.reply(m.chat, 'An error occurred while generating the image.', m);
  }
};

handler.help = ['blackneon', 'bnoxy'];
handler.tags = ['photooxy'];
handler.command = /^(blackneon|bnoxy)$/i;

export default handler;