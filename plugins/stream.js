import axios from 'axios';

let handler = async (m, { text, conn, usedPrefix, command }) => {
    // Define 'result' and 'author' with static values
    let result = 'HAVE FUN WATCHING ANIME'; // Replace with your actual static message
    let author = '𝙴𝚡𝚌𝚎𝚕'; // Replace with the actual author name or relevant string

    await conn.sendButton(
        m.chat,
        result,
        author,
        'https://telegra.ph/file/8eb79a63a0bed4cd90c76.jpg',
        [['GROUPS', `${usedPrefix}groups`]],
        null,
        [['STREAM ANIME', 'https://www.anime-planet.com/anime/watch-online/']],
        m
    );
};

handler.help = ['stream'];
handler.tags = ['main'];
handler.command = ['stream'];

export default handler;