const shell = require('shelljs');

module.exports = function emoInstall() {
  const processId = shell.exec(`SLARDARCLI_SKIP_ERROR=1 emo i --filter "pc_editor..."`);
  if (processId.code !== 0) {
    shell.echo(`Error: emo安装依赖失败`);
    return;
  }
};
