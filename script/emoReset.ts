const shell = require('shelljs');

module.exports = function emoReset() {
  const processId = shell.exec(`SLARDARCLI_SKIP_ERROR=1 emo reset --filter "pc_editor..."`);
  if (processId.code !== 0) {
    shell.echo(`Error: emo重装依赖失败`);
    return;
  }
};
