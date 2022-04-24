const fs = require('fs');

function writeFile(html) {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', html, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'index.html created at dist directory'
      });
    });
  });
};

function copyFiles() {
  return new Promise((resolve, reject) => {
    // copy css from src
    fs.copyFile('./src/assets/css/style.css', './dist/assets/css/style.css', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'style.css copied to dist/assets/css'
      })
    })
    // copy engineer icon from src
    fs.copyFile('./src/assets/images/engineer-icon.svg', './dist/assets/images/engineer-icon.svg', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'engineer icon copied to dist/assets/images'
      })
    })
    // copy manager icon from src
    fs.copyFile('./src/assets/images/manager-icon.svg', './dist/assets/images/manager-icon.svg', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'manager icon copied to dist/assets/images'
      })
    })
    // copy intern icon from src
    fs.copyFile('./src/assets/images/intern-icon.svg', './dist/assets/images/intern-icon.svg', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'intern icon copied to dist/assets/images'
      });
    });
  });
};

module.exports = {
  writeFile,
  copyFiles
}