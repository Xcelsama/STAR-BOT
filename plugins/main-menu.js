import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Kolkata').format('HH')
let wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './STAR.jpg'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("919341378016@s.whatsapp.net")[0]
let str = `

┏━━🤖 _BOT STATUS:_🤖━━┓
┃ 🏮  *Creator:* ARYAN-XD
┃ 🪀 *Bot Name:* ROMEK-XD-BOT
┃ 💻  *Host:* Linux Lair
┃ 📣  *Prefix:* ${usedPrefix} 
┃ 🕓  *Uptime:* ${uptime}
┃ 💌  *Database:* ${rtotalreg} of ${totaluser} 
┃ 📚  *Total Users:* ${totaluser} 
╰───────────────
┌─❖『 *_AI_* 』❖
┃❏*bingimg2
┃❏*chatgpt
┃❏*aisearch
┃❏*toanime
┃❏*gitagpt
┃❏*chat
┃❏*blackbox
┃❏*bingimg <query>
┃❏*tocartoon
┃❏*dalle
╰─────────────────❖
┌─❖『 *_image_* 』❖
┃❏*blackpink
╰─────────────────❖
┌─❖『 *_tools_* 』❖
┃❏*gemini <text>
┃❏*nowa
┃❏*qr <text>
┃❏*qrcode <text>
┃❏*weather *<place>*
┃❏*shortlink <longLink>
┃❏*bitly <longlink>
┃❏*dehaze
┃❏*recolor
┃❏*hdr
┃❏*get
┃❏*length <amount>
┃❏*tinyurl <link>
┃❏*shorten <link>
┃❏*tempmail
┃❏*shazam
┃❏*cal <equation>
┃❏*.carbon <code>
┃❏*define <word>
┃❏*element
┃❏*itunes
┃❏*lyrics
┃❏*imdb
┃❏*course
┃❏*randomcourse
┃❏*readmore <text1>|<text2>
┃❏*readvo
┃❏*removebg
┃❏*ss <url>
┃❏*ssf <url>
┃❏*style <key> <text>
┃❏*subreddit
┃❏*telesticker  Ⓛ
┃❏*tourl
┃❏*translate <lang> <text>
┃❏*tts <lang> <task>
┃❏*wa
┃❏*wikipedia
┃❏*true
┃❏*findmusic
┃❏*githubstalk <query>
╰─────────────────❖
┌─❖『 *_group_* 』❖
┃❏*getbio <@tag/reply>  Ⓛ
┃❏*getbio <@tag/reply>  Ⓛ
┃❏*animequote
┃❏*Setdesc <text>
┃❏*setname <text>
┃❏*add
┃❏*delete
┃❏*delwarn @user
┃❏*demote (@tag)
┃❏*infogp
┃❏*hidetag
┃❏*invite <917xxx>
┃❏*kick @user
┃❏*link
┃❏*poll question|option|option
┃❏*profile
┃❏*promote
┃❏*resetlink
┃❏*setbye <text>
┃❏*group *open/close*
┃❏*setwelcome <text>
┃❏*simulate <event> @user
┃❏*staff
┃❏*tagall
┃❏*totag
┃❏*warn @user
┃❏*warns
╰─────────────────❖
┌─❖『 *_anime_* 』❖
┃❏*anime
┃❏*akira
┃❏*akiyama
┃❏*anna
┃❏*asuna
┃❏*ayuzawa
┃❏*boruto
┃❏*chiho
┃❏*chitoge
┃❏*deidara
┃❏*erza
┃❏*elaina
┃❏*eba
┃❏*emilia
┃❏*hestia
┃❏*hinata
┃❏*inori
┃❏*isuzu
┃❏*itachi
┃❏*itori
┃❏*kaga
┃❏*kagura
┃❏*kaori
┃❏*keneki
┃❏*kotori
┃❏*kurumi
┃❏*madara
┃❏*mikasa
┃❏*miku
┃❏*minato
┃❏*naruto
┃❏*nezuko
┃❏*sagiri
┃❏*sasuke
┃❏*sakura
┃❏*akira
┃❏*amv  Ⓛ
┃❏*waifu
┃❏*neko
┃❏*zerotwo
┃❏*loli
┃❏*jjanime  Ⓛ
┃❏*pokedex <pokemon>
┃❏*trace
╰─────────────────❖
┌─❖『 *_img_* 』❖
┃❏*messi
┃❏*cristianoronaldo
┃❏*cr7
┃❏*ppcouple
┃❏*ppcp
┃❏*pinterest
╰─────────────────❖
┌─❖『 *_owner_* 』❖
┃❏*leavegc
┃❏*out
┃❏*deletechat
┃❏*pin
┃❏*unpin
┃❏*deletechat
┃❏*addprem <@tag>
┃❏*addowner @user
┃❏*allow <@tag>
┃❏*HEROKU
┃❏*ban @user
┃❏*banchat
┃❏*tx
┃❏*broadcastgroup <text>
┃❏*bcgc <text>
┃❏*cleartmp
┃❏*delexpired
┃❏*delprem @user
┃❏*removeowner @user
┃❏*setppbotfull
┃❏*getplugin <name file>
┃❏*getfile <name file>
┃❏*join <chat.whatsapp.com> <dias>
┃❏*reset <54xxx>
┃❏*resetprefix
┃❏*restart
┃❏*.setprefix
┃❏*.setprefix [symbol]
┃❏*unban @user
┃❏*unbanchat
┃❏*update
┃❏*update now
┃❏*config
┃❏*listban
┃❏*deleteplugin <name>
╰─────────────────❖
┌─❖『 *_fun_* 』❖
┃❏*afk <reason>
┃❏*tomp3
┃❏*toav
┃❏*toxicity
┃❏*bot
┃❏*character @tag
┃❏*dare
┃❏*flirt
┃❏*gay @user
┃❏*joke
┃❏*pickupline
┃❏*question
┃❏*shayari
┃❏*ship
┃❏*yomamajoke
┃❏*truth
┃❏*waste @user
┃❏*perv
┃❏*handsome
┃❏*hot
┃❏*sexy
┃❏*ugly
┃❏*cute
┃❏*playboy
┃❏*playgirl
┃❏*beautiful
┃❏*lesbian
┃❏*whore
┃❏*motherfucker
┃❏*sucker
┃❏*horny
┃❏*foolish
┃❏*nibba
┃❏*nibbi
┃❏*bitch
┃❏*waifu
┃❏*crackhead
┃❏*rascal
┃❏*idiot
┃❏*girlyboy
┃❏*tomboy
┃❏*gigachad
┃❏*mf
┃❏*introvert
┃❏*extrovert
┃❏*sigma
┃❏*psycho
┃❏*brainless
┃❏*useless
┃❏*singer
┃❏*image
┃❏*meme
┃❏*quote
╰─────────────────❖
┌─❖『 *_reaction_* 』❖
┃❏*bully @tag
┃❏*cuddle @tag
┃❏*cry @tag
┃❏*hug @tag
┃❏*awoo @tag
┃❏*kiss @tag
┃❏*lick @tag
┃❏*pat @tag
┃❏*smug @tag
┃❏*bonk @tag
┃❏*yeet @tag
┃❏*blush @tag
┃❏*smile @tag
┃❏*wave @tag
┃❏*highfive @tag
┃❏*handhold @tag
┃❏*nom @tag
┃❏*bite @tag
┃❏*glomp @tag
┃❏*slap @tag
┃❏*kill @tag
┃❏*happy @tag
┃❏*wink @tag
┃❏*poke @tag
┃❏*dance @tag
┃❏*cringe @tag
╰─────────────────❖
┌─❖『 *_utility_* 』❖
┃❏*bmi
┃❏*crypto
┃❏*currency
┃❏*countdown
┃❏*prayertime
┃❏*convert
╰─────────────────❖
┌─❖『 *_main_* 』❖
┃❏*channel
┃❏*database
┃❏*user
┃❏*gpguru
┃❏*alive
┃❏*blocklist
┃❏*info
┃❏*owner
┃❏*totalfeature
┃❏*hack
┃❏*list
┃❏*botmenu
┃❏*ownermenu
┃❏*groupmenu
┃❏*dlmenu
┃❏*downloadermenu
┃❏*economymenu
┃❏*funmenu
┃❏*gamemenu
┃❏*stickermenu
┃❏*nsfwmenu
┃❏*logomenu
┃❏*toolmenu
┃❏*animemenu2
┃❏*animemenu
┃❏*listprem
┃❏*logomenu2
┃❏*ping
┃❏*ping2
┃❏*runtime
┃❏*script
┃❏*server
┃❏*system
┃❏*blocklist
┃❏*setprivacy
┃❏*allmenu
╰─────────────────❖
┌─❖『 *_cmd_* 』❖
┃❏*delcmd <text>
┃❏*listcmd
┃❏*setcmd <txt>
╰─────────────────❖
┌─❖『 *_information_* 』❖
┃❏*cninfo
┃❏*fact
╰─────────────────❖
┌─❖『 *_finance_* 』❖
┃❏*crypto
╰─────────────────❖
┌─❖『 *_cryptocurrency_* 』❖
┃❏*crypto
╰─────────────────❖
┌─❖『 *_time_* 』❖
┃❏*countdown
╰─────────────────❖
┌─❖『 *_downloader_* 』❖
┃❏*facebook <url>
┃❏*gdrive 🅟
┃❏*gitclone <url>
┃❏*igstalk
┃❏*instagram
┃❏*mediafire <url>
┃❏*mega
┃❏*modapk
┃❏*play <query>
┃❏*play2 <text>
┃❏*playvid <text>
┃❏*play3  Ⓛ
┃❏*tiktok <url>
┃❏*tiktokstalk
┃❏*twitter <url>
┃❏*ytmp3 <url>
┃❏*ytsearch
┃❏*ytmp4 <yt-link>
┃❏*wallpaper <query>
┃❏*play  Ⓛ
┃❏*play  Ⓛ
╰─────────────────❖
┌─❖『 *_premium_* 』❖
┃❏*gdrive 🅟
┃❏*mediafire <url>
╰─────────────────❖
┌─❖『 *_economy_* 』❖
┃❏*addgold <@user>
┃❏*addxp <@user>
┃❏*bank
┃❏*buych
┃❏*cock-fight <amount>
┃❏*buy
┃❏*buyall
┃❏*daily
┃❏*deposit
┃❏*gamble <amount> <color(red/black)>
┃❏*give credit [amount] [@tag]
┃❏*levelup
┃❏*rank
┃❏*rob
┃❏*roulette <amount> <color(red/black)>
┃❏*wallet
┃❏*withdraw
┃❏*work
╰─────────────────❖
┌─❖『 *_core_* 』❖
┃❏*leaderboard
╰─────────────────❖
┌─❖『 *_game_* 』❖
┃❏*slot <amount>
┃❏*chess [from to]
┃❏*chess delete
┃❏*chess join
┃❏*chess start
┃❏*delttt
┃❏*guessflag
┃❏*Maths <modes>
┃❏*ppt <rock/paper/scissors>
┃❏*tictactoe <tag number>
╰─────────────────❖
┌─❖『 *_config_* 』❖
┃❏*enable <option>
┃❏*disable <option>
╰─────────────────❖
┌─❖『 *_internet_* 』❖
┃❏*google <search>
┃❏*s <search>
╰─────────────────❖
┌─❖『 *_maker_* 』❖
┃❏*blur
┃❏*difuminar2
┃❏*hornycard
┃❏*hornylicense
┃❏*gfx1
┃❏*gfx2
┃❏*gfx3
┃❏*gfx4
┃❏*gfx5
┃❏*gfx6
┃❏*gfx7
┃❏*gfx8
┃❏*gfx9
┃❏*gfx10
┃❏*gfx11
┃❏*gfx12
┃❏*simpcard
┃❏*itssostupid
┃❏*iss
┃❏*stupid
┃❏*tweet <comment>
┃❏*lolicon
┃❏*quozio
┃❏*qmkr
┃❏*ytcomment <comment>
╰─────────────────❖
┌─❖『 *_nsfw_* 』❖
┃❏*nsfw
╰─────────────────❖
┌─❖『 *_advanced_* 』❖
┃❏$
╰─────────────────❖
┌─❖『 *_plugin_* 』❖
┃❏*plugins
┃❏*install <Gist URL>
╰─────────────────❖
┌─❖『 *_rg_* 』❖
┃❏*reg <name.age>
┃❏*mysn
┃❏*unreg <Num Serie>
╰─────────────────❖
┌─❖『 *_sticker_* 』❖
┃❏*emojimix <emoji+emoji>
┃❏*getsticker
┃❏*smaker
┃❏*stickerwithmeme (caption|reply media)
┃❏*swmeme <url>
┃❏*swm(caption|reply media)
┃❏*sfull
┃❏*toimg <sticker>
┃❏*tovid
┃❏*trigger <@user>
┃❏*ttp
┃❏*ttp2
┃❏*ttp3
┃❏*ttp4
┃❏*ttp5
┃❏*attp
┃❏*attp2
┃❏*attp3
┃❏*take <name>|<𝐑𝐎𝐌𝐄𝐊-𝐗𝐃-𝐁𝐎𝐓>
╰─────────────────❖
