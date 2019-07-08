const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'lnt_designer-win32-ia32/'),
    authors: 'lnt designer',
    description: 'lnt designer',
    noMsi: true,
    outputDirectory: path.join(outPath, 'win-installer'),
    exe: 'lnt_designer.exe',
    setupExe: 'LNTDesignerInstaller.exe',
    setupIcon: path.join(rootPath, 'electron-container', 'icons', 'win.ico')
  })
}
