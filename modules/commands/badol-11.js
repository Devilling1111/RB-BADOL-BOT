const fs = require("fs");
module.exports.config = {
	name: "mcs4",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "BADOL-KHAN", 
	description: "mcs emoji reply",
	commandCategory: "no prefix",
	usages: "mcs4",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😘")==0 || event.body.indexOf("💋")==0 ||  event.body.indexOf("😚")==0) {
		var msg = {
				body: "╭•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\nꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸ𝙈𝙊𝙃𝘼𝙈𝙈𝘼𝘿-𝘽𝘼𝘿𝘼𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔ꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╰•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╯",
				attachment: fs.createReadStream(__dirname + `/badol-khan/cummah.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤦‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }