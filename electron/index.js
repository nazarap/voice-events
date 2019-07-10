const electron = require('electron')
const { ipcMain } = require('electron')
const app = electron.app
const globalShortcut = electron.globalShortcut
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
let screen

// handle setupevents as quickly as possible
const setupEvents = require('./container/setup.events')
if (setupEvents.handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return
}

const renderApp = () => {
  // create the browser window
  let { width, height } = electron.screen.getPrimaryDisplay().size
  height = height * 4 / 5
  width = width * 4 / 5
  screen = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // render the required website/entrypoint
  // screen.loadURL('http://localhost:8080/#/')
  screen.loadURL(url.format({
    pathname: path.join(__dirname, '../dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  globalShortcut.register('Ctrl+Shift+I', () => {
    screen.webContents.openDevTools()
  })
  // emitted when the window is going to be closed
  screen.on('close', e => {
    if (screen) {
      e.preventDefault()
      screen.webContents.send('app-close')
    } else {
      app.quit()
    }
  })
  // dereference the screen object when the window is closed
  screen.on('closed', () => {
    screen = null
  })
  // handles asynchronous and synchronous messages sent from a renderer process (web page)
  ipcMain.on('closed', () => {
    screen = null
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
}

// call the renderApp() method when Electron has finished initializing
app.on('ready', renderApp)

// when all windows are closed, quit the application on Windows/Linux
app.on('window-all-closed', () => {
  // only quit the application on OS X if the user hits cmd + q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // re-create the screen if the dock icon is clicked in OS X and no other
  // windows were open
  if (screen === null) {
    renderApp()
  }
})
