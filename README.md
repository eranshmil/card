![The almighty card](https://raw.githubusercontent.com/eranshmil/card/master/assets/screenshot.jpg)

![The almighty card](https://raw.githubusercontent.com/eranshmil/card/master/assets/screenshot-fg.jpg)

The idea and original [source code](https://github.com/bnb/bitandbang/) created by Tierney Cyren ([@bitandbang](https://github.com/bnb)).

# Changing avatars

1. Replace `./assets/avatar.png` with your own avatar.
1. Run the command:

   ```bash
   npm run gen
   ```

- You need to [install graphicsmagick](https://github.com/IonicaBizau/image-to-ascii/blob/master/INSTALLATION.md), in order to install all the dependencies, or else you will get the following error:

  ```bash
  It seems like lwip failed to be intalled. Please check the errors.
  ```

# Usage

Via npx:

```bash
npx @eranshmil/card

// render the avatar as colorized characters
npx @eranshmil/card --fg
```

Not including how to use it globally because I'm not sure why you'd want this as a global command. That'd be creepy.
