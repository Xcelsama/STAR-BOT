export default async function displayLoadingScreen(conn, from) {
    const loadingStages = [
      "sᴛᴀʀ-ᴠ2ʟᴏᴀᴅɪɴɢ 《 █▒▒▒▒▒▒▒▒▒▒▒》10%,",
      "sᴛᴀʀ-ᴠ2ʟᴏᴀᴅɪɴɢ 《 ████▒▒▒▒▒▒▒▒》30%,",
      "sᴛᴀʀ-ᴠ2ʟᴏᴀᴅɪɴɢ 《 ███████▒▒▒▒▒》50%,",
      "sᴛᴀʀ-ᴠ2ʟᴏᴀᴅɪɴɢ 《 ██████████▒▒》80%,",
      "sᴛᴀʀ-ᴠ2ʟᴏᴀᴅɪɴɢ 《 ████████████》100%,",
      "sᴛᴀʀ ʜᴀs ʟᴏᴀᴅᴇᴅ ᴄᴏᴍᴘʟᴇᴛʟʏ"
    ];
  
    try {
      const { key } = await conn.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' });
  
      for (let i = 0; i < loadingStages.length; i++) {
        await conn.relayMessage(from, {
          protocolMessage: {
            key: key,
            type: 14,
            editedMessage: {
              conversation: loadingStages[i]
            }
          }
        }, {});
      }
    } catch (error) {
      console.error('Error displaying loading screen:', error);
    }
  }
  
