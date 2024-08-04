import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  try {
    let _0x45fa91 = await fetch('https://shizoapi.onrender.com/api/texts/shayari?apikey=shizo');
    if (!_0x45fa91.ok) throw await _0x45fa91.text();
    let { result: _0x1aa994 } = await _0x45fa91.json();
    
    m.reply(_0x1aa994 ? _0x1aa994 : "_Request Denied from Server!");
    m.react('✅'); // Assuming this is how you indicate success
  } catch (_0x303ba6) {
    console.error(_0x303ba6);
    m.react('❌'); // Assuming this is how you indicate error
  }
};

handler.help = ['poetry'];
handler.tags = ['fun'];
handler.command = ['poetry'];

export default handler;