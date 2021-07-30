const { Plugin } = require('powercord/entities');

module.exports = class SauceConverter extends Plugin {
	startPlugin() {
		powercord.api.commands.registerCommand({
			command: 'sauce',
			description: 'Convert the numbers to a full link',
			usage: '{c} [numbers to convert]',
			executor: (args) => ({
				send: false,
				result: args.forEach(numSet => {
					return 'https://nhentai.net/g/' + numSet;
				})
			})
		});
	}

	pluginWillUnload () {
		powercord.api.commands.unregisterCommand('sauce');
	}
};
