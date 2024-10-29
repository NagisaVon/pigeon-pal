// main.js

const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Create the browser window with the desired properties
  const win = new BrowserWindow({
    width: 96,          // Set the window width
    height: 96,         // Set the window height
    frame: false,        // Remove window frame (no borders)
    transparent: true,   // Make the background transparent
    alwaysOnTop: true,   // Keep the window on top of others
    hasShadow: false,    // Remove window shadow (optional)
    resizable: true,    // Make the window non-resizable (optional)
    webPreferences: {
      nodeIntegration: true,   // Enable Node.js integration (if needed)
      contextIsolation: false, // Required for nodeIntegration in Electron >=12
    },
  });

  win.loadFile('index.html');
  win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Re-create a window when the app is activated (macOS specific)bgifs/idle.gif
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});