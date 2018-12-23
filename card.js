const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
const boxen = require('boxen');
const imageToAscii = require('image-to-ascii');

/**
 * Texts template that will be placed to the right of the avatar.
 *
 * @param {object} data Card information.
 *
 * @returns {string[]}
 */
function getCardTextTemplate(data) {
  return chalk`
    {green.bold ${data.name}}\n
    {white.bold Work:}         {white ${data.work}}
    {white.bold Open Source:}  {white ${data.os}}\n\n
    {white.bold Twitter:}      {cyan ${data.twitter}}\n
    {white.bold npm:}          {cyan ${data.email}}\n
    {white.bold GitHub:}       {cyan ${data.github}}\n
    {white.bold LinkedIn:}     {cyan ${data.linkedin}}\n
    {white.bold Web:}          {cyan ${data.web}}\n\n
    {white.bold Card:}         {white ${data.npx}}
    `.split('\n');
}

/**
 * Convert an image to colored text ascii.
 *
 * @param {string} filePath Image file location.
 * @param {boolean} useBgColor Convert image using background color.
 *
 * @returns {string[]}
 */
async function convertImageToAscii(filePath, imageToAsciiOptions) {
  return new Promise((resolve, reject) => {
    imageToAscii(filePath, imageToAsciiOptions, (err, output) => {
      if (err) return reject(err);

      return resolve(output.split('\n'));
    });
  });
}

/**
 * Convert the avatar and merge with the supplied information.
 *
 * @param {object} data Card information.
 * @param {object} imageToAsciiOptions
 * @param {object} boxenOptions
 *
 * @returns {string}
 */
async function createCard(data, imageToAsciiOptions, boxenOptions) {
  const avatar = await convertImageToAscii(data.avatarFilePath, imageToAsciiOptions);
  const cardTextTemplate = getCardTextTemplate(data);

  const mergedOutput = avatar
    .map((line, index) => line.concat(cardTextTemplate[index] || ''))
    .join('\n');

  return chalk.green(boxen(mergedOutput, boxenOptions));
}

/**
 * Generate two versions of the card and save to bin folder.
 *
 * @param {object} data Card information.
 * @param {object} imageToAsciiOptions
 * @param {object} boxenOptions
 */
async function generateCards(data, imageToAsciiOptions, boxenOptions) {
  try {
    const outputFg = await createCard(data, imageToAsciiOptions, boxenOptions);
    fs.writeFileSync(path.join(__dirname, 'bin/output-fg'), outputFg);

    const output = await createCard(
      data,
      { ...imageToAsciiOptions, bg: true, pixels: ' ' },
      boxenOptions,
    );
    fs.writeFileSync(path.join(__dirname, 'bin/output'), output);
  } catch (err) {
    console.error(err);
  }
}

module.exports = generateCards;
