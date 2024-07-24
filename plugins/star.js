import { delay } from '@whiskeysockets/baileys';

let teddy = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (text.toLowerCase().includes("teddy")) {
      let teddyBear = ['🌟', '', '✨', '💫', '🎇', '✨', '🌟', '⭐', '🌠'];
      for (let i = 0; i < teddyBear.length; i++) {
        await conn.sendMessage(m.chat, `Here's a teddy bear for you: ${teddyBear[i]}`, { quoted: m });
        await delay(500);
      }
    }
    await conn.chatRead(m.chat);
    await m.reply('🌠');
  } catch (error) {
    console.error(error);
    m.reply('Oops! Something went wrong.');
  }
};

teddy.help = ['star'];
teddy.tags = ['fun'];
teddy.command = /^(star)$/i;
export default star;