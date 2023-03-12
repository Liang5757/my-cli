const shell = require('shelljs');

module.exports = function emoInstall() {
  const processId = shell.exec(`emo run rpc:fetch --filter "pc_editor..."`);
  if (processId.code !== 0) {
    shell.echo(`Error: emo拉取idl失败`);
    return;
  }
};
