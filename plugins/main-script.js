import { promises } from 'fs';
import { join } from 'path';
import axios from 'axios'; 

let handler = async function (m, { conn, __dirname }) {
  const githubRepoURL = 'https://github.com/Xcelsama/STAR-MD-V2';

  try {
  
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

    if (response.status === 200) {
      const repoData = response.data;

      // Format the repository information with emojis
      const formattedInfo = `
    ────〘 𝐒𝐓𝐀𝐑-𝐌𝐃-𝐕𝟐 〙───⊷

🤖 𝐁𝐎𝐓-𝐍𝐀𝐌𝐄: _${repoData.name}_
📝 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧:  A bot Multidevice Bot with    tons of functions
👤 𝐃𝐄𝐕: _EXCEL AMADI_
⭐ 𝐒𝐓𝐀𝐑𝐒: _${repoData.stargazers_count}_ 
📲 𝐏𝐀𝐈𝐑 𝐂𝐎𝐃𝐄: https://replit.com/@Xcelsama/STAR-BOT-PAIRr?s=app
🍴 𝐅𝐎𝐑𝐊𝐒: _${repoData.forks_count}_ 
💻 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐂𝐇𝐀𝐍𝐍𝐄𝐋: https://whatsapp.com/channel/0029VaBcXo4JJhzW9c1uVD2X 
🌐 𝐔𝐑𝐋: ${repoData.html_url}

 `.trim();

      // Send the formatted information as a message
      await conn.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 99999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    } else {
      // Handle the case where the API request fails
      await conn.reply(m.chat, 'Unable to fetch repository information.', m);
    }
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'An error occurred while fetching repository information.', m);
  }
};

handler.help = ['script'];
handler.tags = ['main'];
handler.command = ['sc', 'repo', 'script'];

export default handler;
