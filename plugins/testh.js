import axios from "axios"
let handler = async (m, { args }) => {
  if (!args[0]) throw "*Start a new game by thinking of an object*"
  if (args[0].toLowerCase() === "new") {
    thinkOfObject()
    m.reply("I'm thinking of an object. You can ask me up to 20 yes or no questions to try to guess what it is.")
  } else {
    try {
      const response = handleInput(args[0])
      m.reply(response)
    } catch {
      return "*ERROR*"
    }
  }
}

let object = ""
let questionsAsked = 0
let maxQuestions = 20

function thinkOfObject() {
  // For this example, let's just choose a random object from an array
  const objects = ["apple", "car", "house", "dog", "book"]
  object = objects[Math.floor(Math.random() * objects.length)]
}

function handleInput(input) {
  // Check if the user wants to ask a question
  if (input.startsWith("is")) {
    // Extract the question from the input
    const question = input.substring(2).trim()
    // Check if the question is yes or no
    if (question === "it alive?" || question === "it a living thing?") {
      // Answer the question
      if (object === "dog") {
        return "Yes"
      } else {
        return "No"
      }
    } else if (question === "it a fruit?" || question === "it edible?") {
      if (object === "apple") {
        return "Yes"
      } else {
        return "No"
      }
    } else {
      // If the question is not recognized, respond with a hint
      return "I'm not sure what you mean by that. Try asking a yes or no question!"
    }
  } else if (input === "guess") {
    // If the user wants to make a guess, check if they're correct
    const guess = input.substring(5).trim()
    if (guess === object) {
      return " Congratulations! You guessed it!"
    } else {
      return "Sorry, that's not correct. You can ask more questions or try again."
    }
  } else {
    // If the input is not recognized, respond with a hint
    return "I didn't understand that. Try asking a yes or no question or making a guess!"
  }
  questionsAsked++
  if (questionsAsked === maxQuestions) {
    return `You ran out of questions! The object was ${object}.`
  }
}

handler.help = ['20q *<question>*', '20q new']
handler.tags = ['games']
handler.command = /^(20q|twentyquestions)$/i
export default handler