class nzcli {
	parameters;

	constructor(parameters, process) {
		this.parameters = parameters;
		try {
			let keys = Object.keys(process.argv);
			for (let i = 2, l = keys.length; i < l; i++) {
				this.checkArgument(process.argv[i]);
			}
		} catch(e) {
			console.log(e);
		}
	}

	checkArgument(arg) {
		let args = arg.split('=');
		try {
			if (args[0].length > 0 && args[1].length > 0) {
				this.parameters.args[0] = args[1];
			}
		} catch(e) {
			console.log(e);
		}
	}

}

module.exports = nzcli;
