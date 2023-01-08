#! /usr/bin/env node
const { program } = require('commander');
const packageJson = require('../package.json');
const create = require('../script/create.ts');
const freePort = require('../script/freePort.ts');
const clearNodeModule = require('../script/clearNodeModule.ts');

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

program.parse();
