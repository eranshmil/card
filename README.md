![The almighty card](https://raw.githubusercontent.com/eranshmil/card/master/assets/screenshot.jpg)

![The almighty card](https://raw.githubusercontent.com/eranshmil/card/master/assets/screenshot-fg.jpg)

The idea and original [source code](https://github.com/bnb/bitandbang/) created by Tierney Cyren ([@bitandbang](https://github.com/bnb)).

# Prerequisites

You need to [install graphicsmagick](https://github.com/IonicaBizau/image-to-ascii/blob/master/INSTALLATION.md), in order to install all the dependencies, or you will get the following error:

```bash
It seems like lwip failed to be intalled. Please check the errors.
```

# Usage

## Generate avatars

To avoid running image-to-ascii when running npx, I generated the avatars to txt files.

```bash
npm run gen
```

## Show the card

Via npx:

```bash
npx @eranshmil/card

// render the avatar as colorized characters
npx @eranshmil/card --fg
```

Not including how to use it globally because I'm not sure why you'd want this as a global command. That'd be creepy.
