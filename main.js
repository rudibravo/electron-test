const {app, session, protocol} = require("electron");
const BrowserWindow = require("electron").BrowserWindow;
const { spawn } = require('child_process');

const child = spawn('ping', ['8.8.8.8'], {stdio: "ignore", detached: true});
child.unref();

console.log(`CHILD pid ${child.pid}`);

app.on("ready", () => {
	let win = new BrowserWindow({width: 800, height: 600})
	win.on('closed', () => {
		win = null;
		console.log(`EXIT pid ${process.pid}`);
		app.exit();
	});

	win.loadURL('https://github.com');
});

console.log(`STARTED pid ${process.pid}`);
