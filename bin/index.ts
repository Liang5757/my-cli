#! /usr/bin/env node
const { program } = require('commander');
const packageJson = require('../package.json');
const create = require('../script/create.ts');
const freePort = require('../script/freePort.ts');
const clearNodeModule = require('../script/clearNodeModule.ts');
const emoInstall = require('../script/emoInstall.ts');
const emoReset = require('../script/emoReset.ts');
const emoBuildLibs = require('../script/emoBuildLibs.ts');
const emoFetchIDL = require('../script/emoFetchIDL.ts');
const emoStart = require('../script/emoStart.ts');

program.version(packageJson.version, '-v, --version');

program
  .command('create <name>')
  .description('创建项目')
  .action(name => {
    create(name);
  });

program
  .command('kill <port>')
  .description('释放端口')
  .action(port => {
    freePort(port);
  });

program
  .command('clear')
  .description('清除node modules')
  .action(() => {
    clearNodeModule();
  });

program
  .command('i')
  .description('安装emo依赖')
  .action(() => {
    emoInstall();
  });

program
  .command('reset')
  .description('重装emo依赖')
  .action(() => {
    emoReset();
  });

program
  .command('lib')
  .description('构建libs')
  .action(() => {
    emoBuildLibs();
  });

program
  .command('idl')
  .description('拉取idl')
  .action(() => {
    emoFetchIDL();
  });

program
  .command('start')
  .description('启动项目')
  .action(() => {
    emoStart();
  });

program
  .command('s')
  .description('启动项目')
  .action(() => {
    emoStart();
  });

program.parse();
