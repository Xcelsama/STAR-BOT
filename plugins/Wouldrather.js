let handler = async (m, { conn, text, command }) => {
  try {
    let options = [
      { question: "Play a game with a great story or great graphics?", choice1: "story", choice2: "graphics" },
      { question: "Be a character in a game or be the game developer?", choice1: "character", choice2: "developer" },
      { question: "Have a million dollars to spend on games or have every game for free?", choice1: "money", choice2: "freegames" },
      { question: "Play games for 24 hours straight or never play games again?", choice1: "marathon", choice2: "no games" },
      { question: "Have a 10-minute conversation with a historical figure or spend 10 minutes in a place that no longer exists?", choice1: "historical figure", choice2: "lost place" },
      { question: "Be able to speak any language fluently or be able to play any musical instrument perfectly?", choice1: "language", choice2: "instrument" },
      { question: "Have a photographic memory or be able to learn any new skill in a day?", choice1: "memory", choice2: "new skill" },
      { question: "Be able to breathe underwater or be able to fly?", choice1: "underwater", choice2: "fly" },
      { question: "Have a private island or have a private jet?", choice1: "island", choice2: "jet" },
      { question: "Be able to talk to animals or have a 30-minute conversation with an alien?", choice1: "animals", choice2: "alien" },
      { question: "Have a million followers on social media or have a bestselling book?", choice1: "followers", choice2: "bestseller" },
      { question: "Be able to time travel to any point in history or be able to see the future?", choice1: "time travel", choice2: "see future" },
      { question: "Have a 10-minute conversation with a fictional character or spend 10 minutes in a fictional world?", choice1: "fictional character", choice2: "fictional world" },
      { question: "Be able to shapeshift into any animal or object or be able to teleport anywhere?", choice1: "shapeshift", choice2: "teleport" },
      { question: "Have a private concert with your favorite artist or have a private cooking class with a celebrity chef?", choice1: "concert", choice2: "cooking class" },
      { question: "Be able to control the weather or be able to control technology with your mind?", choice1: "weather", choice2: "mind control" },
      { question: "Have a 5-minute conversation with a deceased loved one or have a 5-minute conversation with your future self?", choice1: "deceased loved one", choice2: "future self" },
      { question: "Be able to create a new universe or be able to destroy an existing one?", choice1: "create universe", choice2: "destroy universe" },
      { question: "Have a 10-minute conversation with a superhero or spend 10 minutes in a superhero's world?", choice1: "superhero", choice2: "superhero world" },
      { question: "Be able to turn invisible or be able to turn anything into gold?", choice1: "invisible", choice2: "gold" },
      { question: "Have a private meeting with a world leader or have a private tour of a secret government facility?", choice1: "world leader", choice2: "secret facility" },
      { question: "Be able to control your dreams or be able to control your emotions?", choice1: "dreams", choice2: "emotions" },
      { question: "Have a 5-minute conversation with a mythical creature or spend 5 minutes in a mythical world?", choice1: "mythical creature", choice2: "mythical world" },
      { question: "Be able to create a new element or be able to destroy an existing one?", choice1: "create element", choice2: "destroy element" },
      { question: "Have a private lesson with a famous athlete or have a private lesson with a famous artist?", choice1: "athlete", choice2: "artist" },
      { question: "Be able to talk to the dead or be able to see the future?", choice1: "talk to dead", choice2: "see future" },
      { question: "Have a 10-minute conversation with a famous scientist or spend 10 minutes in a famous scientist's lab?", choice1: "scientist", choice2: "lab" },
           { question: "Be able to speak to the trees or be able to speak to the animals?", choice1: "trees", choice2: "animals" },
      { question: "Have a 5-minute conversation with a famous inventor or spend 5 minutes in a famous inventor's workshop?", choice1: "inventor", choice2: "workshop" },
      { question: "Be able to control the wind or be able to control the rain?", choice1: "wind", choice2: "rain" },
      { question: "Have a private meeting with a famous entrepreneur or have a private tour of a famous startup?", choice1: "entrepreneur", choice2: "startup" },
      { question: "Be able to turn anything into a musical instrument or be able to turn anything into a work of art?", choice1: "instrument", choice2: "art" },
      { question: "Have a 10-minute conversation with a famous journalist or spend 10 minutes in a famous journalist's newsroom?", choice1: "journalist", choice2: "newsroom" },
      { question: "Be able to control the clouds or be able to control the fog?", choice1: "clouds", choice2: "fog" },
      { question: "Have a private lesson with a famous dancer or have a private dance performance with a famous dancer?", choice1: "dancer", choice2: "dance performance" },
      { question: "Be able to turn anything into a book or be able to turn anything into a movie?", choice1: "book", choice2: "movie" },
      { question: "Have a 5-minute conversation with a famous astronaut or spend 5 minutes in space?", choice1: "astronaut", choice2: "space" },
      { question: "Be able to control the rivers or be able to control the lakes?", choice1: "rivers", choice2: "lakes" },
      { question: "Have a private meeting with a famous politician or have a private tour of a famous government building?", choice1: "politician", choice2: "government building" },
      { question: "Be able to turn anything into a sport or be able to turn anything into a game?", choice1: "sport", choice2: "game" },
      { question: "Have a 10-minute conversation with a famous musician or spend 10 minutes in a famous musician's recording studio?", choice1: "musician", choice2: "recording studio" },
      { question: "Be able to control the mountains or be able to control the valleys?", choice1: "mountains", choice2: "valleys" },
      { question: "Have a private lesson with a famous actor or have a private acting class with a famous actor?", choice1: "actor", choice2: "acting class" },
      { question: "Be able to turn anything into a puzzle or be able to turn anything into a riddle?", choice1: "puzzle", choice2: "riddle" },
      { question: "Have a 5-minute conversation with a famous explorer or spend 5 minutes on a famous expedition?", choice1: "explorer", choice2: "expedition" },
      { question: "Be able to control the deserts or be able to control the forests?", choice1: "deserts", choice2: "forests" },
      { question: "Have a private meeting with a famous artist or have a private tour of a famous art museum?", choice1: "artist", choice2: "art museum" },
      { question: "Be able to turn anything into a song or be able to turn anything into a poem?", choice1: "song", choice2: "poem" },
      { question: "Have a 10-minute conversation with a famous writer or spend 10 minutes in a famous writer's writing studio?", choice1: "writer", choice2: "writing studio" },
      { question: "Be able to control the oceans' tides or be able to control the earth's rotation?", choice1: "oceans' tides", choice2: "earth's rotation" },
      { question: "Have a private lesson with a famous athlete or have a private sports training session with a famous athlete?", choice1: "athlete", choice2: "sports training session" },
      { question: "Be able to turn anything into a joke or be able to turn anything into a pun?", choice1: "joke", choice2: "pun" },
      { question: "Have a 5-minute conversation with a famous comedian or spend 5 minutes in a famous comedian's comedy club?", choice1: "comedian", choice2: "comedy club" },
// Add more options here
]
     let randomOption = options[Math.floor(Math.random() * options.length)]
    let question = randomOption.question
    let choice1 = randomOption.choice1
    let choice2 = randomOption.choice2

    m.reply(`Would you rather... ${question}\n\nA) ${choice1}\nB) ${choice2}\n\nType 'A' or 'B' to respond!`)
  } catch (e) {
    console.error(e)
    m.reply("Error! 😕")
  }
}

handler.help = ['wouldyou']
handler.tags = ['game']
handler.command = /^(wouldyou|rather|wy|r)$/i
handler.limit = true

export default handler