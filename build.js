const path = require('path');
const chalk = require('chalk');

const generateCards = require('./card');

const data = {
  avatarFilePath: path.join(__dirname, 'assets', 'bnb.jpg'),
  name: chalk`Tierney Cyren {white /} bitandbang`,
  work: 'Senior Cloud Developer Advocate at Microsoft',
  os: chalk`Node.js Community Committee {green ⬢}`,
  email: 'https://npmjs.com/~bnb ',
  twitter: 'https://twitter.com/bnb',
  github: 'https://github.com/bnb',
  linkedin: 'https://linkedin.com/in/bitandbang',
  web: 'https://bnb.im',
  npx: 'npx bitandbang',
};

/**
 * Image To Ascii configurations.
 *
 * https://github.com/IonicaBizau/image-to-ascii#memo-documentation
 */
const imageToAscii = {
  size: {
    width: 20,
    height: 20,
  },
};

/**
 * Box configurations.
 *
 * https://github.com/sindresorhus/boxen#api
 */
const boxen = {
  margin: 1,
  padding: 1,
  borderStyle: 'round',
};

generateCards(data, imageToAscii, boxen);
