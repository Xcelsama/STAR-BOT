import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  let msg = 'Orgy Image 🥵☠️';
  let endpoint = `https://shizoapi.onrender.com/api/nsfw/orgy?apikey=${shizokeys}`;

  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'shizo.techie.error.png', msg, m);
    } else {
      throw new Error('Failed to fetch the image.');
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle the error as appropriate for your application
  }
};

handler.tags = ['nsfw'];
handler.help = handler.command = ['orgy'];
handler.nsfw = true;

export default handler;