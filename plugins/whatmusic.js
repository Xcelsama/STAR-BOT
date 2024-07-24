import fs from 'fs'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) {
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `
• 📌 Title: ${title}
• 👨‍🎤 Singer: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'Unable to Detect'}
• 💾 Album: ${album.name || 'Unable to Detect'}
• 🌐 Genres: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'Unable to Detect'}
• 📆 Release: ${release_date || 'Unable to Detect'}
`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else throw 'Failed to get The details'
}

handler.help = ['findmusic']
handler.tags = ['tools']
handler.command = /^quemusica|quemusicaes|whatmusic|findmusic$/i
export default handler