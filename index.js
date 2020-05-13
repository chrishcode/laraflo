#!/usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');

inquirer
  .prompt([
    {
      name: 'projectName',
      message: 'Project name:',
    },
  ])
  .then(answers => {
    console.info('Installing Laraflo...');
    // console.log(answers.projectName);
    shell.exec('git clone https://github.com/chrishcode/laraflo-basic.git ' + answers.projectName);
    console.info('Laraflo was successfully installed!');
  });

// console.log("Hello world!");