const bs = require(`browser-sync`).create();

bs.init({
	files: [
		`./build/**/*`
	],
	ignore: [
		`./build/index.html`
	],
	ghostMode: false,
	notify: false,
	logFileChanges: true,
	logLevel: 'debug',
	logPrefix: '',
	single: true,
	reloadThrottle: 100,
	reloadDebounce: 100,
	server: {
		baseDir: `./build`
	}
});
