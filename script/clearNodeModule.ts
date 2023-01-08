const rimraf = require('rimraf');

module.exports = function clearNodeModule() {
  rimraf('node_modules', (err) => {
    if (err) {
      console.log('删除node_modules失败');
    } else {
      console.log('删除node_modules成功');
    }
  })
};
