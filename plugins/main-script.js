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
⭑⭑⭑★✪ *STAR-MD-V2* ✪★⭑⭑⭑
📂 *ᏴϴͲ ΝᎪᎷᎬ:* _${repoData.name}_
📝 *Description:* _${repoData.description}_👤 *ϴᏔΝᎬᎡ:* _EXCEL AMADI_
⭐ *ՏͲᎪᎡՏ:* _${repoData.stargazers_count}_    
🔍 *ᎦᏟᎯ𐒐-ϘᏒ:*https://session.guruapi.tech/
⚔️ *ᘜᖇOᑌᑭ:* https://chat.whatsapp.com/Lg0lY4M1k8oDMYzylg86xs
📡 *ᑭᑌᗷᒪIᑕ ᘜᖇOᑌᑭ:* https://chat.whatsapp.com/EmP3syvou18HrZk6R6nTAK
💻 *ᑕᕼᗩᑎᑎᗴᒪ ᒪIᑎK:* https://whatsapp.com/channel/0029Va9wmuz8F2pGIURwmo0m
🍴 *ҒϴᎡᏦՏ:* _${repoData.forks_count}_
🌐 *ႮᎡᏞ:* ${repoData.html_url}
🌠 *ΝϴᏔ ᎠᎬᏢᏞϴᎽ*:-https://dashboard.heroku.com/new?template=https://github.com/Xcelsama/STAR-MD-V2' 


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
