#!/usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');

inquirer
  .prompt([
    {
      name: 'larafloKey',
      message: 'Laraflo Key:',
    },
  ])
  .then(answers => {
    if(answers.larafloKey == '4b4bfe10-3df6-4729-b6ea-77d305608202') {
      console.info('Scaffolding Laraflo...');
      shell.exec('git clone https://github.com/chrishcode/laraflo-templates.git laraflo');
    }
  });

// console.log("Hello world!");