process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';
import './config.js';
import _0xeed8e5 from 'dotenv';
import { existsSync, readFileSync, readdirSync, unlinkSync, watch } from 'fs';
import { createRequire } from 'module';
import _0x34d2f9, { join } from 'path';
import { platform } from 'process';
import { fileURLToPath, pathToFileURL } from 'url';
import 'ws';
import _0x2742e4 from './lib/makesession.js';
import _0x1488aa from './lib/tempclear.js';
global.__filename = function filename(_0x192854 = import.meta.url, _0x563250 = platform !== 'win32') {
  return _0x563250 ? /file:\/\/\//.test(_0x192854) ? fileURLToPath(_0x192854) : _0x192854 : pathToFileURL(_0x192854).toString();
};
global.__dirname = function dirname(_0x5db61c) {
  return _0x34d2f9.dirname(global.__filename(_0x5db61c, true));
};
global.__require = function require(_0x408aab = import.meta.url) {
  return createRequire(_0x408aab);
};
global.gurubot = "https://www.guruapi.tech/api";
import _0x52f29c from 'chalk';
import { spawn } from 'child_process';
import _0x479739 from 'lodash';
import { JSONFile, Low } from 'lowdb';
import _0x169375 from 'node-cache';
import { default as _0x361733, default as _0x19cc65 } from 'pino';
import _0x259dae from 'syntax-error';
import { format } from 'util';
import _0x3cc387 from 'yargs';
import _0x25e671 from './lib/cloudDBAdapter.js';
import { MongoDB } from './lib/mongoDB.js';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
const {
  DisconnectReason,
  useMultiFileAuthState,
  MessageRetryMap,
  fetchLatestWaWebVersion,
  makeCacheableSignalKeyStore,
  makeInMemoryStore,
  proto,
  delay,
  jidNormalizedUser,
  PHONENUMBER_MCC
} = await (await import('@whiskeysockets/baileys'))['default'];
import _0x58711a from 'readline';
_0xeed8e5.config();
async function main() {
  const _0x4e2b1c = process.env.SESSION_ID;
  if (!_0x4e2b1c) {
    console.error("Environment variable not found.");
    return;
  }
  try {
    await _0x2742e4(_0x4e2b1c);
    console.log("processTxtAndSaveCredentials completed.");
  } catch (_0x535ccf) {
    console.error("Error:", _0x535ccf);
  }
}
main();
await delay(10000);
const pairingCode = !!global.pairingNumber || process.argv.includes("--pairing-code");
const useQr = process.argv.includes("--qr");
const MAIN_LOGGER = _0x19cc65({
  'timestamp': () => ",\"time\":\"" + new Date().toJSON() + "\""
});
const logger = MAIN_LOGGER.child({});
logger.level = 'fatal';
const store = makeInMemoryStore({
  'logger': logger
});
store?.["readFromFile"]("./sessions.json");
setInterval(() => {
  store?.["writeToFile"]("./sessions.json");
}, 60000);
const msgRetryCounterCache = new _0x169375();
const rl = _0x58711a.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const question = _0xe09976 => new Promise(_0x3feb5b => rl.question(_0xe09976, _0x3feb5b));
const {
  chain
} = _0x479739;
const PORT = process.env.PORT || process.env.SERVER_PORT || 0xbb8;
protoType();
serialize();
global.API = (_0x78dc18, _0xf858a9 = '/', _0x104fb8 = {}, _0x18f8a5) => (_0x78dc18 in global.APIs ? global.APIs[_0x78dc18] : _0x78dc18) + _0xf858a9 + (_0x104fb8 || _0x18f8a5 ? '?' + new URLSearchParams(Object.entries({
  ..._0x104fb8,
  ...(_0x18f8a5 ? {
    [_0x18f8a5]: global.APIKeys[_0x78dc18 in global.APIs ? global.APIs[_0x78dc18] : _0x78dc18]
  } : {})
})) : '');
global.timestamp = {
  'start': new Date()
};
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(_0x3cc387(process.argv.slice(0x2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (process.env.PREFIX || "*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.@").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
global.opts.db = process.env.DATABASE_URL;
global.db = new Low(/https?:\/\//.test(opts.db || '') ? new _0x25e671(opts.db) : /mongodb(\+srv)?:\/\//i.test(opts.db) ? new MongoDB(opts.db) : new JSONFile((opts._[0x0] ? opts._[0x0] + '_' : '') + 'database.json'));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x425e4c => setInterval(async function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x425e4c(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read()["catch"](console.error);
  global.db.READ = null;
  global.db.data = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'sticker': {},
    'settings': {},
    ...(global.db.data || {})
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();
global.authFolder = "sessions";
const {
  state,
  saveCreds
} = await useMultiFileAuthState(global.authFolder);
let {
  version,
  isLatest
} = await fetchLatestWaWebVersion();
const connectionOptions = {
  'version': version,
  'logger': _0x361733({
    'level': "fatal"
  }),
  'printQRInTerminal': !pairingCode,
  'browser': ["chrome (linux)", '', ''],
  'auth': {
    'creds': state.creds,
    'keys': makeCacheableSignalKeyStore(state.keys, _0x361733().child({
      'level': 'fatal',
      'stream': 'store'
    }))
  },
  'markOnlineOnConnect': false,
  'generateHighQualityLinkPreview': true,
  'getMessage': async _0x2775fe => {
    let _0x24753d = jidNormalizedUser(_0x2775fe.remoteJid);
    let _0x931cd0 = await store.loadMessage(_0x24753d, _0x2775fe.id);
    return _0x931cd0?.["message"] || '';
  },
  'patchMessageBeforeSending': _0x3b6702 => {
    const _0x9d24bc = !!(_0x3b6702.buttonsMessage || _0x3b6702.templateMessage || _0x3b6702.listMessage);
    if (_0x9d24bc) {
      _0x3b6702 = {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadataVersion': 0x2,
              'deviceListMetadata': {}
            },
            ..._0x3b6702
          }
        }
      };
    }
    return _0x3b6702;
  },
  'msgRetryCounterCache': msgRetryCounterCache,
  'defaultQueryTimeoutMs': undefined,
  'syncFullHistory': false
};
global.conn = makeWASocket(connectionOptions);
conn.isInit = false;
store?.['bind'](conn.ev);
if (pairingCode && !conn.authState.creds.registered) {
  let phoneNumber;
  if (!!global.pairingNumber) {
    phoneNumber = global.pairingNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(_0x54e15c => phoneNumber.startsWith(_0x54e15c))) {
      console.log(_0x52f29c.bgBlack(_0x52f29c.redBright("Start with your country's WhatsApp code, Example : 234xxx")));
      process.exit(0x0);
    }
  } else {
    phoneNumber = await question(_0x52f29c.bgBlack(_0x52f29c.greenBright("Please type your WhatsApp number : ")));
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(_0x8d691c => phoneNumber.startsWith(_0x8d691c))) {
      console.log(_0x52f29c.bgBlack(_0x52f29c.redBright("Start with your country's WhatsApp code, Example : 234xxx")));
      phoneNumber = await question(_0x52f29c.bgBlack(_0x52f29c.greenBright("Please type your WhatsApp number : ")));
      phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
      rl.close();
    }
  }
  setTimeout(async () => {
    let _0x2e7161 = await conn.requestPairingCode(phoneNumber);
    _0x2e7161 = _0x2e7161?.["match"](/.{1,4}/g)?.["join"]('-') || _0x2e7161;
    const _0xf01d38 = _0x52f29c.bold.greenBright("Your Pairing Code:") + " " + _0x52f29c.bgGreenBright(_0x52f29c.black(_0x2e7161));
    console.log(_0xf01d38);
  }, 0xbb8);
}
conn.logger.info("\nWaiting For Login\n");
if (!opts.test) {
  if (global.db) {
    setInterval(async () => {
      if (global.db.data) {
        await global.db.write();
      }
      if (opts.autocleartmp && (global.support || {}).find) {
        tmp = [os.tmpdir(), "tmp"];
        tmp.forEach(_0x317fb9 => cp.spawn("find", [_0x317fb9, "-amin", '3', "-type", 'f', "-delete"]));
      }
    }, 30000);
  }
}
if (opts.server) {
  (await import('./server.js'))["default"](global.conn, PORT);
}
function runCleanup() {
  _0x1488aa().then(() => {
    console.log("Temporary file cleanup completed.");
  })["catch"](_0x303cb0 => {
    console.error("An error occurred during temporary file cleanup:", _0x303cb0);
  })["finally"](() => {
    setTimeout(runCleanup, 120000);
  });
}
runCleanup();
function clearsession() {
  let _0x793b93 = [];
  const _0x468a8a = readdirSync("./sessions");
  const _0xfc0b4d = _0x468a8a.filter(_0x426d97 => {
    return _0x426d97.startsWith("pre-key-");
  });
  _0x793b93 = [..._0x793b93, ..._0xfc0b4d];
  _0xfc0b4d.forEach(_0x44e9b8 => {
    unlinkSync("./sessions/" + _0x44e9b8);
  });
}
async function connectionUpdate(_0x34b739) {
  const {
    connection: _0x45fba8,
    lastDisconnect: _0x4d8645,
    isNewLogin: _0xea6aab,
    qr: _0x536650
  } = _0x34b739;
  global.stopped = _0x45fba8;
  if (_0xea6aab) {
    conn.isInit = true;
  }
  const _0x231f47 = _0x4d8645?.["error"]?.["output"]?.["statusCode"] || _0x4d8645?.["error"]?.["output"]?.["payload"]?.["statusCode"];
  if (_0x231f47 && _0x231f47 !== DisconnectReason.loggedOut && conn?.['ws']["socket"] == null) {
    conn.logger.info(await global.reloadHandler(true)["catch"](console.error));
  }
  if (_0x231f47 && _0x231f47 == DisconnectReason.restartRequired) {
    conn.logger.info(_0x52f29c.yellow("\n🚩Restart Required... Restarting"));
    process.send("reset");
  }
  if (global.db.data == null) {
    loadDatabase();
  }
  if (!pairingCode && useQr && _0x536650 != 0x0 && _0x536650 != undefined) {
    conn.logger.info(_0x52f29c.yellow("\nLogging in...."));
  }
  if (_0x45fba8 === "open") {
    const {
      jid: _0x5735ca,
      name: _0x432d9e
    } = conn.user;
    conn.logger.info(_0x52f29c.yellow("\n🚩 ＳＴＡＲ   B O Ｔ ＩＳ  R E A D Y"));
  }
  if (_0x45fba8 == "close") {
    conn.logger.error(_0x52f29c.yellow("\nconnection closed....Get a New Session_id"));
  }
}
process.on("uncaughtException", console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x350fc6) {
  try {
    const _0x4bf8f7 = await import("./handler.js?update=" + Date.now())["catch"](console.error);
    if (Object.keys(_0x4bf8f7 || {}).length) {
      handler = _0x4bf8f7;
    }
  } catch (_0x40d9af) {
    console.error;
  }
  if (_0x350fc6) {
    const _0x303b0d = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      'chats': _0x303b0d
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off('messages.update', conn.pollUpdate);
    conn.ev.off("group-participants.update", conn.participantsUpdate);
    conn.ev.off("groups.update", conn.groupsUpdate);
    conn.ev.off("message.delete", conn.onDelete);
    conn.ev.off("presence.update", conn.presenceUpdate);
    conn.ev.off('connection.update', conn.connectionUpdate);
    conn.ev.off('creds.update', conn.credsUpdate);
  }
  conn.welcome = " Hello @user!\n\n🎉 *WELCOME* to the group @group!\n\n📜 Please read the *DESCRIPTION* @desc.";
  conn.bye = "👋GOODBYE @user \n\nSee you later!";
  conn.spromote = "*@user* has been promoted to an admin!";
  conn.sdemote = "*@user* is no longer an admin.";
  conn.sDesc = "The group description has been updated to:\n@desc";
  conn.sSubject = "The group title has been changed to:\n@group";
  conn.sIcon = "The group icon has been updated!";
  conn.sRevoke = " The group link has been changed to:\n@revoke";
  conn.sAnnounceOn = "The group is now *CLOSED*!\nOnly admins can send messages.";
  conn.sAnnounceOff = "The group is now *OPEN*!\nAll participants can send messages.";
  conn.sRestrictOn = "Edit Group Info has been restricted to admins only!";
  conn.sRestrictOff = "Edit Group Info is now available to all participants!";
  conn.handler = handler.handler.bind(global.conn);
  conn.pollUpdate = handler.pollUpdate.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.presenceUpdate = handler.presenceUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn, true);
  const _0x2d00a4 = new Date();
  const _0x1a6a23 = new Date(conn.ev);
  if (_0x2d00a4 >= _0x1a6a23) {} else {}
  conn.ev.on('messages.upsert', conn.handler);
  conn.ev.on('messages.update', conn.pollUpdate);
  conn.ev.on("group-participants.update", conn.participantsUpdate);
  conn.ev.on('groups.update', conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on('presence.update', conn.presenceUpdate);
  conn.ev.on('connection.update', conn.connectionUpdate);
  conn.ev.on('creds.update', conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, "./plugins/index"));
const pluginFilter = _0x3bc1db => /\.js$/.test(_0x3bc1db);
global.plugins = {};
async function filesInit() {
  for (const _0x3615b7 of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      const _0x1b5173 = global.__filename(join(pluginFolder, _0x3615b7));
      const _0x2b07fb = await import(_0x1b5173);
      global.plugins[_0x3615b7] = _0x2b07fb['default'] || _0x2b07fb;
    } catch (_0x37c181) {
      conn.logger.error(_0x37c181);
      delete global.plugins[_0x3615b7];
    }
  }
}
filesInit().then(_0x226556 => Object.keys(global.plugins))["catch"](console.error);
global.reload = async (_0x4f48f7, _0x454d99) => {
  if (/\.js$/.test(_0x454d99)) {
    const _0x26e1d5 = global.__filename(join(pluginFolder, _0x454d99), true);
    if (_0x454d99 in global.plugins) {
      if (existsSync(_0x26e1d5)) {
        conn.logger.info("\nUpdated plugin - '" + _0x454d99 + "'");
      } else {
        conn.logger.warn("\nDeleted plugin - '" + _0x454d99 + "'");
        return delete global.plugins[_0x454d99];
      }
    } else {
      conn.logger.info("\nNew plugin - '" + _0x454d99 + "'");
    }
    const _0xec5db8 = _0x259dae(readFileSync(_0x26e1d5), _0x454d99, {
      'sourceType': "module",
      'allowAwaitOutsideFunction': true
    });
    if (_0xec5db8) {
      conn.logger.error("\nSyntax error while loading '" + _0x454d99 + "'\n" + format(_0xec5db8));
    } else {
      try {
        const _0x36c819 = await import(global.__filename(_0x26e1d5) + '?update=' + Date.now());
        global.plugins[_0x454d99] = _0x36c819["default"] || _0x36c819;
      } catch (_0x5dc1dd) {
        conn.logger.error("\nError require plugin '" + _0x454d99 + "\n" + format(_0x5dc1dd) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0xe72460], [_0x4cd325]) => _0xe72460.localeCompare(_0x4cd325)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  const _0x105d0d = await Promise.all([spawn("ffmpeg"), spawn("ffprobe"), spawn("ffmpeg", ["-hide_banner", "-loglevel", 'error', "-filter_complex", "color", "-frames:v", '1', '-f', "webp", '-']), spawn("convert"), spawn("magick"), spawn('gm'), spawn("find", ['--version'])].map(_0x467ac2 => {
    return Promise.race([new Promise(_0x1af961 => {
      _0x467ac2.on("close", _0x5f3056 => {
        _0x1af961(_0x5f3056 !== 0x7f);
      });
    }), new Promise(_0x170ca5 => {
      _0x467ac2.on("error", _0x9ee54d => _0x170ca5(false));
    })]);
  }));
  const [_0x32829f, _0x246803, _0x57a205, _0x27db73, _0x48e73b, _0x23c842, _0x524952] = _0x105d0d;
  Object.freeze(global.support);
}
async function saafsafai() {
  if (stopped === 'close' || !conn || !conn.user) {
    return;
  }
  clearsession();
  console.log(_0x52f29c.cyanBright("\nStored Sessions Cleared"));
}
setInterval(saafsafai, 600000);
_quickTest()["catch"](console.error);