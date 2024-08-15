let handler = async (m, { conn, usedPrefix, command }) => {
  const response = await conn.groupRequestParticipantsList(m.chat);
  if (!response || !response.length) {
    conn.reply(m.chat, 'No pending join requests. ✅', m);
    return;
  }

  let replyMessage = '😉 Join Request List:\n';
  response.forEach((request, index) => {
    const { jid, request_method, request_time } = request;
    const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();

    replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
    replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
    replyMessage += `\n🧪 *Method:* ${request_method}`;
    replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
  });

  conn.reply(m.chat, replyMessage, m);
};

handler.help = ['getjoinreq'];
handler.tags = ['group', 'admins'];
handler.command = /^(getjoinreq)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;