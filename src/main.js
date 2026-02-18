const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

let mainWindow;
let expressServer;

// Create Express Server
const createExpressServer = () => {
    const expressApp = express();
    expressApp.use(cors());
    expressApp.use(express.json());
    expressApp.use(express.urlencoded({ extended: true }));

    // API Routes
    expressApp.use('/api/auth', require('./server/routes/auth'));
    expressApp.use('/api/rooms', require('./server/routes/rooms'));
    expressApp.use('/api/bookings', require('./server/routes/bookings'));
    expressApp.use('/api/guests', require('./server/routes/guests'));
    expressApp.use('/api/staff', require('./server/routes/staff'));
    expressApp.use('/api/billing', require('./server/routes/billing'));
    expressApp.use('/api/reports', require('./server/routes/reports'));
    expressApp.use('/api/inventory', require('./server/routes/inventory'));

    const PORT = process.env.SERVER_PORT || 3000;
    expressServer = expressApp.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

// Create Electron Window
const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 1000,
        minHeight: 700,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
        icon: path.join(__dirname, '../assets/icon.png')
    });

    const startUrl = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../public/index.html')}`;
    mainWindow.loadURL(startUrl);

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

// App Events
app.on('ready', () => {
    createExpressServer();
    createWindow();
    createMenu();
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
    if (expressServer) {
        expressServer.close();
    }
});
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

// Create Application Menu
const createMenu = () => {
    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Exit',
                    accelerator: 'CmdOrCtrl+Q',
                    click: () => {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' }
            ]
        },
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' }
            ]
        }
    ];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
};

// Handle IPC Events
ipcMain.on('app-version', (event) => {
    event.reply('app-version', { version: app.getVersion() });
});
ipcMain.on('app-name', (event) => {
    event.reply('app-name', { name: process.env.APP_NAME || 'KSA Hotel Management' });
});
