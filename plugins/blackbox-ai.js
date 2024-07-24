import axios from 'axios';

const endpoint = 'https://api.maher-zubair.tech/ai/blackbox?q';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  try {
    if (!text) {
      throw `❓ *Please provide some text to use Blackbox AI*`;
    }

    // Append user's JID to the API endpoint
    const userJID = m.sender.split('@')[0];
    const apiEndpoint = `${endpoint}${text}&id=${userJID}`;

    let res = {};
    try {
      await m.reply('sᴛᴀʀ-ᴍᴅ-ᴠ2⌛ᴀɪ ɪs ᴛʜɪɴᴋɪɴɢ...');
      res = await axios.get(apiEndpoint);
    } catch (e) {
      console.error(e);
      res = await axios.get(apiEndpoint);
    }

    res.data ? m.reply(res.data.response) : m.reply("⛔ *An error occurred.*");

  } catch (e) {
    console.error(e);
    m.reply(e);
  }
};

handler.help = ['blackbox'];
handler.tags = ['AI'];
handler.command = ['blackbox', 'bb'];

export default handler;
