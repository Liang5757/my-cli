const shell = require('shelljs');

module.exports = function freePort(port) {
  const processId = shell.exec(`lsof -i:${port}`, { silent: true });
  if (processId.code !== 0) {
    shell.echo(`Error: 查看端口命令出错 ${processId}`);
    return;
  }

  const PIDCollector = new Set();
  processId.stdout.split('\n').forEach((line, i) => {
    if (i === 0) return;

    let attrs = line.trim().split(/\s+/);
    let PID = attrs[1];

    PID && PIDCollector.add(PID);
  });

  PIDCollector.forEach((PID) => {
    if (shell.exec(`kill -9 ${PID}`).code !== 0) {
      shell.echo(`Error: kill ${PID} fail`);
      return;
    }

    shell.echo(`kill PID:${PID} success`);
  });
};
