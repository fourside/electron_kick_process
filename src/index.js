const { remote } = require('electron');
const kickProcess = remote.require('./src/process');

document.addEventListener("DOMContentLoaded", (event) => {
  init();
});

function init() {
  const kickButton = document.getElementById('kick');
  kickButton.addEventListener('click', (event) => {
    kickProcess();
  });
}

