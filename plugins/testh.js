import axios from "axios"

let handler = async (m, { args }) => {
  if (!args[0]) throw "*Start a new game*"
  if (args[0].toLowerCase() === "new") {
    startGame()
    m.reply("Let's play! I'll ask you 20 yes or no questions.")
  } else {
    try {
      const response = handleInput(args[0])
      m.reply(response)
    } catch {
      return "*ERROR*"
    }
  }
}

let questionsAsked = 0
let maxQuestions = 20
let questions = []

async function startGame() {
  const response = await axios.get('https://opentdb.com/api.php?amount=20&type=boolean')
  questions = response.data.results
}

async function handleInput(input) {
  if (questionsAsked < maxQuestions) {
    const question = questions[questionsAsked]
    if (input.toLowerCase() === "yes" || input.toLowerCase() === "y") {
      if (question.correct_answer === "True") {
        return "Correct!"
      } else {
        return "Incorrect. The correct answer is No."
      }
    } else if (input.toLowerCase() === "no" || input.toLowerCase() === "n") {
      if (question.correct_answer === "False") {
        return "Correct!"
      } else {
        return "Incorrect. The correct answer is Yes."
      }
    } else {
      return "Please respond with either 'yes' or 'no'."
    }
    questionsAsked++
  } else {
    return "You've reached the end of the game. Thanks for playing!"
  }
}

handler.help = ['20q *<answer>*', '20q new']
handler.tags = ['games']
handler.command = /^(20q|twentyquestions)$/i
export default handler