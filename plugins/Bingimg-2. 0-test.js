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
  await message.react('🫠');

  // Encode the text to be used in a URL
  const encodedText = encodeURIComponent(text);

  // Fetch the response from the Copilot service
  let response = await fetchCopilotResponse(encodedText);

  // If no response is received, throw an error
  if (!response) {
    throw new Error('No valid JSON response from Copilot');
  }

  // Reply with the result from Copilot
  await conn.reply(message.chat, response.response, message);
};

// Handler metadata
handler.tags = ['ai'];
handler.help = ['copilot'];
handler.command = /^(copilot)$/i;
export default handler;

// Function to call the Copilot API
async function fetchCopilotResponse(query) {
  const url = `https://api.copilot.io/v1/converse`;
  const headers = {
    'Content-Type': 'application/json'
  };

  const data = {
    'prompt': query
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const jsonData = await response.json();
  return jsonData;
}