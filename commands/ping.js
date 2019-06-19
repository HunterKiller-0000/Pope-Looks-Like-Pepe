const exampleEmbed = {
	color: 0x0099ff,
	title: 'Ping',
	url: 'https://discord.js.org',
	author: {
		name: 'Some name',
		icon_url: 'https://i.imgur.com/wSTFkRM.png',
		url: 'https://discord.js.org',
	},
	description: 'Some description here',
	thumbnail: {
		url: 'https://i.imgur.com/wSTFkRM.png',
	}
};

channel.send({ embed: exampleEmbed });
