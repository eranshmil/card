#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

const isForeground = process.argv.includes('--fg');

const avatarFilePath = path.join('./assets', isForeground ? 'avatar-fg.txt' : 'avatar.txt');

// Define options for Boxen
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

// Text + chalk definitions
const data = {
  name: chalk.green.bold('   Eran Shmil'),
  work: chalk.white.italic.bold('Full-Stack Developer'),
  email: chalk.cyan('eranshmil@gmail.com'),
  twitter: chalk.cyan('https://twitter.com/eranshmil'),
  github: chalk.cyan('https://github.com/eranshmil'),
  linkedin: chalk.cyan('https://linkedin.com/in/eranshmil'),
  npx: chalk.white('npx @eranshmil/card ' + (process.argv[2] || '')),
  labelEmail: chalk.white.bold('   Email:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('   GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelCard: chalk.white.bold('   Card:')
};

// Actual strings we're going to output
const heading = `${data.name}`;
const working = `   ${data.work}`;
const emailing = `${data.labelEmail}     ${data.email}`;
const twittering = `${data.labelTwitter}   ${data.twitter}`;
const githubing = `${data.labelGitHub}    ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}      ${data.npx}`;

// Convert image to ascii and then print the card
const output = fs.readFileSync(avatarFilePath, 'utf8').split(/\n/);

output[1] += heading;
output[3] += working;
output[7] += emailing;
output[9] += twittering;
output[11] += githubing;
output[13] += linkedining;
output[18] += carding;

console.log(chalk.green(boxen(output.join('\n'), boxenOptions)));
