const fetch = require('node-fetch');

let handler = async (m, { conn }) => {
  try {
    let res = await fetch('https://api.maher-zubair.tech/details/wabetainfo');
    if (!res.ok) throw await res.text();
    let json = await res.json();
    if (!json.result) throw new Error("No result found");

    const { title, subtitle, date, image, link, desc, QandA } = json.result;

    let output = `*${title || "No Title"}*\n\n`;
    output += `${subtitle || "No Subtitle"}\n`;
    output += `${date || "No Date"}\n\n`;
    output += `${desc || "No Description"}\n\n`;
    output += `*Link:* ${link || "No Link"}\n\n`;

    if (image) {
      output += `![Image](${image})\n\n`;
    }

    if (QandA && QandA.length > 0) {
      output += "*Q&A:*\n";
      QandA.forEach((qa) => {
        output += `*${qa.question}*\n${qa.answer}\n\n`;
      });
    }

    // Check if thumbnail is available before sending it
    if (json.result.thumbnail) {
      await conn.sendFile(m.chat, json.result.thumbnail, 'thumbnail.jpg', output, m);
    } else {
      await conn.sendMessage(m.chat, output, { quoted: m });
    }

    m.react('✅');  // Assuming this is how you indicate success
  } catch (e) {
    console.error(e);
    await m.react('❌');  // Assuming this is how you indicate error
  }
};

handler.help = ['wabeta'];
handler.tags = ['news'];
handler.command = ['wabeta'];

module.exports = handler;