// Ｇｉｖｅ ｃｒｅｄｉｔｓ ｔｏ @Xcelsama
import fetch from 'node-fetch';

var horoscopeHandler = async (m, { conn, args }) => {
  let sign = args[0];
  if (!sign) return conn.sendMessage(m.chat, "Please provide a zodiac sign.");

  let url = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;

  let response = await fetch(url, { method: 'POST' });
  let data = await response.json();

  let horoscopeInfo = `
*Horoscope for ${sign}:*
- Date: ${data.current_date}
- Compatibility: ${data.compatibility}
- Mood: ${data.mood}
- Color: ${data.color}
- Lucky Number: ${data.lucky_number}
- Description: ${data.description}
©ＳＴＡＲ-ＭＤ-Ｖ２
`;

  await conn.sendMessage(m.chat, horoscopeInfo);
};
handler.help=['horoscope']
handler.command = /^(horoscope|zodiac)$/i
handler.tag=['new']
export default handler;