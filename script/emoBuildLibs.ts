const shell = require('shelljs');

module.exports = function emoBuildLibs() {
  const processId = shell.exec(`emo run build --filter "pc_editor^..."`);
  if (processId.code !== 0) {
    shell.echo(`Error: emo构建libs失败`);
    return;
  }
};
