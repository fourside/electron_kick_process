const { spawn } = require('child_process');

function kickProcess() {
  //const process = spawn('notepad');
  const process = spawn('src\\process.bat');

  process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  process.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  process.on('close', (code) => {
    console.log(`process exited with code ${code}`);
  });
}

module.exports = kickProcess;
