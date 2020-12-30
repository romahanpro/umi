const { app, BrowserWindow, Menu, Tray, nativeImage } = require('electron')
import * as path from 'path';

let tray = null

function createWallet () {
    const wallet = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            nodeIntegrationInWorker: false
        }
    })

    wallet.loadFile('wallet/index.html')
    // wallet.webContents.openDevTools()
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
    })

    blockchain.loadFile('blockchain/index.html')
    // blockchain.webContents.openDevTools()
}

function createWalletSnowfall () {
    const wallet = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            nodeIntegrationInWorker: false
        }
    })

    wallet.loadFile('snowfall-wallet/index.html')
    // wallet.webContents.openDevTools()
}

function createBlockchainSnowfall () {
    const blockchain = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            nodeIntegrationInWorker: false
        }
    })

    blockchain.loadFile('snowfall-blockchain/index.html')
    // blockchain.webContents.openDevTools()
}

function createTray () {
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Blockchain',
            click() {
                createBlockchain()
            }
        },
        { type: 'separator' },
        {
            label: 'Snowfall: Wallet',
            click() {
                createWalletSnowfall()
            }
        },
        {
            label: 'Snowfall: Blockchain',
            click() {
                createBlockchainSnowfall()
            }
        },
        { type: 'separator' },
        { role: 'quit' },
    ])

    const img = path.join(app.getAppPath(), 'img/tray.png');

    tray = new Tray(img)
    tray.setContextMenu(contextMenu)
}

app.whenReady().then(() => {
    createTray()
    createWallet()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWallet()
    }
})