#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const isForeground = process.argv.includes('--fg');
const outputFilename = isForeground ? 'output-fg' : 'output';
const output = fs.readFileSync(path.join(__dirname, outputFilename), 'utf8');

console.log(output);
