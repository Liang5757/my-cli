const shell = require('shelljs');

module.exports = function emoReset() {
  const processId = shell.exec(`emo start pc_editor`);
  if (processId.code !== 0) {
    shell.echo(`Error: emo 启动失败`);
    return;
  }
};
