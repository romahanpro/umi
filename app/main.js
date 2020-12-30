'use strict';

const path = require('path');

const { app, BrowserWindow, Menu, Tray, nativeImage } = require('electron');

let tray = null;

function createWallet () {
    const wallet = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            nodeIntegrationInWorker: false
        }
    });

    wallet.loadFile('wallet.html');
}

function createBlockchain () {
    const blockchain = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            nodeIntegrationInWorker: false
        }
    });

    blockchain.loadFile('blockchain.html');
}

function createTray () {
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Blockchain',
            click() {
                createBlockchain();
            }
        },
        { type: 'separator' },
        { role: 'quit' }
    ]);

    const img = path.join(app.getAppPath(), 'img/tray.png');

    tray = new Tray(img);
    tray.setContextMenu(contextMenu);
}

app.whenReady().then(() => {
    createTray();
    createWallet();
});

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
