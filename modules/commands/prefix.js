module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MrTomXxX",
  description: "See the prefix of BOT",
  commandCategory: "For Admins",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  //if (senderID == global.data.botID) return;
  if ((this.config.credits) != "\x4d\x72\x54\x6f\x6d\x58\x78\x58") { return api.sendMessage(`Sai credits!`, threadID, messageID)}
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  var arr = ["mpre","mprefix","prefix", "dấu lệnh", "prefix của bot là gì","daulenh", "duong", "what prefix", "freefix", "what is the prefix", "bot dead", "bots dead", "where prefix", "what is bot", "what prefix bot", "how to use bot" ,"how use bot", "where are the bots","bot not working","bot is offline","where prefix","prefx","prfix","prifx","perfix","bot not talking","where is bot"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`𝐓𝐇𝐈𝐒 𝐈𝐒 𝐌𝐘 𝐏𝐑𝐄𝐅𝐈𝐗 ⇉ [ ${prefix} ]\n                   ♻️𝐎𝐖𝐍𝐄𝐑♻️:- 👑𝐁𝐀𝐃𝐎𝐋 𝐕𝐀𝐈👑 \n\n
🖤𝐘𝐎𝐔 𝐂𝐀𝐍 𝐂𝐀𝐋𝐋 𝐇𝐈𝐌 🌺 𝐁𝐀𝐃𝐎𝐋 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬 🖤\n\n

🌺🌿𝐁𝐀𝐃𝐎𝐋^𝐁𝐎𝐓^007🌺বট-এডমিন🌿🌺
¶────██████────¶
 
¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶────██████────¶

¶─◥██████████◤─¶

¶──◥████████◤──¶

¶────◥████◤────¶

¶─────◥██◤─────¶
🌺✰𝐁𝐀𝐃𝐎𝐋^𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘★🌺`)
      }
      else return out('️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️███████ ]▄▄▄▄▄▄▄▄\n▂▄▅█████████▅▄▃▂\nI███████████████████]\n◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤\n➢' + data.PREFIX)
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("error", event.threadID)
}
