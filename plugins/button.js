import fetch from 'node-fetch'

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `Please provide some text or quote a message to get a response.`
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text
  }

  try {
    m.react(rwait)

    conn.sendPresenceUpdate('composing', m.chat)
    const prompt = encodeURIComponent(text)

    const guru1 = `https://api.gurusensei.workers.dev/llama?prompt=${prompt}`

    try {
      let response = await fetch(guru1)
      let data = await response.json()
      let result = data.response.response

      if (!result) {
        throw new Error('No valid JSON response from the first API')
      }

      await conn.sendButton(m.chat,result, author, 'https://telegra.ph/file/f6908fee9f896b7cb6e63.jpg', [['Script', `${usedPrefix}script`]], null, [['Fork Repo', `https://github.com/Xcelsama/STAR-MD-V2/fork`]], m)
      m.react(done)
    } catch (error) {
      console.error('Error from the first API:', error)

      //const model = 'llama'
     // const senderNumber = m.sender.replace(/[^0-9]/g, '')
      //const session = `star_bot_${senderNumber}`
      const guru2 = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`

      let response = await fetch(guru2)
      let data = await response.json()
      let result = data.completion

     await conn.sendButton(m.chat,result, author, 'https://telegra.ph/file/f6908fee9f896b7cb6e63.jpg', [['Script', `.sc`]], null, [['Fork Repo', `https://github.com/Xcelsama/STAR-MD-V2/fork`]], m)
      m.react(done)
    }
  } catch (error) {
    console.error('Error:', error)
    throw `*ERROR*`
  }
}
handler.help = ['starai']
handler.tags = ['AI']
handler.command = ['starai', 'hello', 'ai', 'stargpt']

export default handler