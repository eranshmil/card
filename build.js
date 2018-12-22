const path = require('path');

const generateCards = require('./card');

const data = {
  avatarFilePath: path.join(__dirname, 'assets/avatar.png'),
  name: 'Eran Shmil',
  work: 'Full-Stack Developer',
  email: 'eranshmil@gmail.com',
  twitter: 'https://twitter.com/eranshmil',
  github: 'https://github.com/eranshmil',
  linkedin: 'https://linkedin.com/in/eranshmil',
  npx: 'npx @eranshmil/card [--fg]',
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
