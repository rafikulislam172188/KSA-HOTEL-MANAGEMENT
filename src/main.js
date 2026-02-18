const express = require('express');
const { app, BrowserWindow } = require('electron');

const server = express();
const PORT = 3000;

// Setup Express server
server.get('/', (req, res) => {
    res.send('Hello from Express!');
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// Create the Electron window
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    win.loadURL(`http://localhost:${PORT}`);
}

// Initialize Electron app
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
