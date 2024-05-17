import axios from "axios"
import fetch from "node-fetch"

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input Texts"
var tes = await Analyze(text)
var shipverdict = [
    "❤️  ❤️  ❤️  ❤️  ❤️", //1-20
    "☠️  ❤️  ❤️  ❤️  ❤️", //21-40
    "☠️  ☠️  ❤️  ❤️  ❤️",
    "☠️  ☠️  ☠️  ❤️  ❤️",
    "☠️  ☠️  ☠️  ☠️  ❤️",
    "☠️  ☠️  ☠️  ☠️  ☠️"
];
var shipfooter = [
    "You are so friendly. Very welcoming to know you!",
    "You are not too toxic, is it fun?",
    "You appear to be toxic. Calm down!",
    "Don't be so toxic. You can relax!",
    "There's nothing more I could say, you're totally the most toxic person in the world!",
    "Your toxic meter also goes above 100%."
];

const toxicity = Number(tes.toxicity * 100).toFixed(2)
let sIndexer;
if (toxicity < 15) {
    sIndexer = 0
} else if ((toxicity > 14) && (toxicity < 35)) {
    sIndexer = 1
} else if ((toxicity > 34) && (toxicity < 51)) {
    sIndexer = 2
} else if ((toxicity > 50) && (toxicity < 76)) {
    sIndexer = 3
} else if ((toxicity > 75) && (toxicity < 95)) {
    sIndexer = 4
} else sIndexer = 5

var caption = `*[ TOXIC STRENGTH ]*

${shipverdict[sIndexer]}
${shipfooter[sIndexer]}
`
throw caption
}
handler.help = ["toxicity"]
handler.tags = ["info", "fun"]
handler.command = /^(toxicity)$/i
export default handler

async function Analyze(teks) {
try {
            const result = await axios.post("https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=AIzaSyDh6d2S3S4zOuZSgyySRcnj8uZMNJ6kdFQ", {
                comment: {
                    text: teks,
                    type: 'PLAIN_TEXT'
                },
                languages: ['id'],
                requestedAttributes: { SEVERE_TOXICITY: {}, INSULT: {} }
            });
            return { toxicity: result.data.attributeScores.SEVERE_TOXICITY.summaryScore.value, insult: result.data.attributeScores.INSULT.summaryScore.value, combined: (result.data.attributeScores.SEVERE_TOXICITY.summaryScore.value + result.data.attributeScores.INSULT.summaryScore.value) / 2 };
        }
        catch (e) {
            console.error(e);
            return { toxicity: NaN, insult: NaN, combined: NaN };
        }
}