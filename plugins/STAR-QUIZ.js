// Ｇｉｖｅ ｃｒｅｄｉｔｓ ｔｏ @Xcelsama
let quizzes = [
  { question: "What is the capital of France?", options: ["Paris", "Rome", "Berlin", "Madrid"], answer: "Paris" },
  { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"], answer: "Harper Lee" },
  // Add more questions as needed
];

var quizHandler = async (m, { conn }) => {
  let quiz = quizzes[Math.floor(Math.random() * quizzes.length)];
  let options = quiz.options.map((opt, i) => `${i + 1}. ${opt}`).join("\n");
  let message = `*Quiz Time!*\n${quiz.question}\n\n${options}\n\nType the number of your answer.`;

  await conn.sendMessage(m.chat, message);

  conn.on('chat-update', async (chat) => {
    if (chat.messages) {
      let msg = chat.messages.all()[0];
      if (msg.key.remoteJid === m.chat && !msg.key.fromMe) {
        let userAnswer = quiz.options[parseInt(msg.message.conversation) - 1];
        if (userAnswer === quiz.answer) {
          await conn.sendMessage(m.chat, "Correct! 🎉");
        } else {
          await conn.sendMessage(m.chat, `Wrong! The correct answer is ${quiz.answer}.`);
        }
        conn.removeAllListeners('chat-update');
      }
    }
  });
};
handler.tag= ['new']
handler.command = /^(quiz|trivia)$/i
export default handler;