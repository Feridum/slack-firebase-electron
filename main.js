const { app, BrowserWindow } = require('electron')

function createWindow () {

    let win = new BrowserWindow({ width: 800, height: 600, frame: true })

    if(app.isPackaged){
        win.loadFile('build/index.html')
    }else {
        win.loadURL("http://localhost:3000");
    }
}

app.on('ready', createWindow);