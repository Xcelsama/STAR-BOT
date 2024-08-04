import fetch from 'node-fetch';

// Main handler function
let handler = async (message, { conn, args, usedPrefix, command, text }) => {
  // Check if the text is provided directly or in a quoted message
  if (!text && !(message.quoted && message.quoted.text)) {
    throw 'Please provide some text or quote a message to get a response.';
  }

  // Use quoted message text if no direct text is provided
  if (!text && message.quoted && message.quoted.text) {
    text = message.quoted.text;
  }

  // Show bot's thinking status
  await message.react('thinking...');
  await message.react('🤔');

  // Encode the text to be used in a URL
  const encodedText = encodeURIComponent(text);

  // Fetch the response from the Bing AI service
  let response = await fetchBingResponse(encodedText);

  // If no response is received, throw an error
  if (!response) {
    throw new Error('No valid JSON response from Bing');
  }

  // Reply with the result from Bing
  await conn.reply(message.chat, response.result, message);
};

// Handler metadata
handler.tags = ['ai'];
handler.help = ['bing'];
handler.command = /^(bing)$/i;
export default handler;

// Function to call the Bing API
async function fetchBingResponse(query) {
  const url = `https://aemt.me/bingai?text=${query}`;
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  };
  
  const response = await fetch(url, {
    method: 'GET',
    headers: headers
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
}