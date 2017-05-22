const { app, BrowserWindow } = require('electron');

let win;

console.log(__dirname);

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadURL(`file://${__dirname}/index.html`);
  win.on('closed', () => win = null);
}

app.on('ready', createWindow);

// MacOs specific hacks
app.on('window-all-closed', () => process.platform !== 'darwin' ? app.quit() : () => { } );
app.on('activate', () => win === null ? createWindow() : () => {});
