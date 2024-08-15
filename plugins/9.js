import fetch from 'node-fetch';

const htki = "HTKI"; // Define htki as a string or appropriate value
const htka = "HTKA"; // Define htka as a string or appropriate value
const botdate = new Date().toISOString(); // Define botdate as the current date in ISO format or your preferred format

let handler = async (m, { text, command, usedPrefix, conn }) => {
    if (!text) throw `contoh:\n${usedPrefix + command} STAR-MD-V2`;

    let res = await fetch(global.API('https://api.github.com', '/search/repositories', { q: text }));
    if (!res.ok) throw new Error('Error fetching data from GitHub');

    let json = await res.json();
    let str = json.items.map((repo, index) => {
        return `>      「 ${1 + index} 」       <
ɴᴀᴍᴇ ʀᴇᴘᴏ : ${repo.name}
ʙʏ : ${repo.owner.login}
ғᴏʀᴋᴇᴅ : ${repo.fork ? 'True' : 'False'}
ᴘʀɪᴠᴀᴛᴇ : ${repo.private ? 'True': 'False'}

➔ ᴄʀᴇᴀᴛᴇᴅ ᴏɴ : ${formatDate(repo.created_at)}
➔ ʟᴀsᴛ ᴜᴘᴅᴀᴛᴇ ᴏɴ :${formatDate(repo.updated_at)}
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
❗ ɪssᴜᴇ : ${repo.open_issues} ${repo.description ? `
📚 ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:
${repo.description}` : ''}

⑂ ᴄʟᴏɴᴇ :
$ git clone ${repo.clone_url}
`.trim();
    }).join('\n— — — — — — — — — — — — — —\n');

    conn.sendHydrated(m.chat, `*${htki} ɢɪᴛʜᴜʙ sᴇᴀʀᴄʜ ${htka}*\n` + str, botdate, null, json.items.map(repo => repo.html_url), ['[ 1 ] ʟ ɪ ɴ ᴋ', '[ 2 ] ʟ ɪ ɴ ᴋ', '[ 3 ] ʟ ɪ ɴ ᴋ'], null, null, [[null,null],[null,null],[null,null]], m);
};

handler.help = ['githubsearch'].map(v => v + ' <repo>');
handler.tags = ['internet','downloader'];

handler.command = /^g(ithub|h)s(earch)?$/i;

export default handler;

function formatDate(n, locale = 'id') {
    let d = new Date(n);
    return d.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
}