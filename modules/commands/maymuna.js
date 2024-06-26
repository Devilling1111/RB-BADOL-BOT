module.exports.config = {
	name: "maymuna",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "BADOL-KHAN", //don't change the credits please
	description: "Bot Owner Rb Badol Khan",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async function ({ event, api }) {
	const t = Date.parse("November 25, 2024 00:00:00") - Date.parse(new Date());
	const seconds = Math.floor((t / 1000) % 60);
	const minutes = Math.floor((t / 1000 / 60) % 60);
	const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	const days = Math.floor(t / (1000 * 60 * 60 * 24));

	const message = `╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n★মাইমুনার জন্মদিন প্রর্যন্ত বাকি সময় হলো★\n\n»${days} ★দিন★ \n\n${hours} ★ঘন্টা★ \n\n${minutes} ★মিনিট★ \n\n${seconds} ★সেকেন্ড★\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯`;

	const links = [
		"https://i.imgur.com/71AKz4Z.jpeg",
		"https://i.imgur.com/7NFM2qH.jpeg"
	];
	const randomLink = links[Math.floor(Math.random() * links.length)];

	const response = await axios.get(randomLink, { responseType: 'stream' });
	const attachment = response.data;

	return api.sendMessage({ body: message, attachment: attachment }, event.threadID, event.messageID);
                                                                  }
