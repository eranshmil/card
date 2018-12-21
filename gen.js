const fs = require('fs');
const imageToAscii = require('image-to-ascii');

const imageToAsciiOptions = {
  size: {
    width: 20,
    height: 20
  }
};

const avatarFilePath = './assets/avatar.png';

let cardJsContent = fs.readFileSync('./bin/card.js', 'utf8');

imageToAscii(avatarFilePath, imageToAsciiOptions, (err, avatarForegroundContent) => {
  imageToAscii(
    avatarFilePath,
    {
      ...imageToAsciiOptions,
      bg: true,
      pixels: ' '
    },
    (err, avatarContent) => {
      cardJsContent = cardJsContent
        .replace(/(const avatarContent = `)[^`]*(`;)/, `$1${avatarContent}$2`)
        .replace(
          /(const avatarForegroundContent = `)[^`]*(`;)/,
          `$1${avatarForegroundContent}$2`
        );

      fs.writeFileSync('./bin/card.js', cardJsContent);
    }
  );
});

console.log('Avatars generated successfully.');
