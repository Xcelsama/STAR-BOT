import { photooxy } from '@shizodevs/wabotmodule';

let handler = async (m, { conn, args }) => {
let shizo = `${args}`
conn.reply(m.chat, wait, m)
  try {
    const imageUrl = await photooxy('https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html', shizo);
    conn.sendFile(m.chat, imageUrl, 'image.jpg', maker, m);
  } catch (error) {
   console.error(error);
    conn.reply(m.chat, 'An error occurred while generating the image.', m);
  }
};

handler.help = ['nightstar', 'nsoxy'];
handler.tags = ['logo'];
handler.command = /^(nightstar|nsoxy)$/i;

export default handler;