# Emoji Shortcode Roulette

A single page app that returns a random emoji and its shortcode. Hit the button to generate a new emoji or to copy the shortcode to your clipboard.

The emoji data is from the GitHub API at https://api.github.com/emojis

The shortcodes are GitHub specific because they're taken from the GitHub API, but they often work elsewhere on the web, for example on Slack, Discord or YouTube.

## What is an emoji shortcode?

From [Emojipedia](https://emojipedia.org/shortcodes/):

> Emoji Shortcodes are codes used on various websites to speed up emoji insertion using a keyboard. These begin with a colon and include a shorter version of an emoji name. For example `:joy:` shows 😂 Face With Tears of Joy on most platforms that support shortcodes.

## How to run the code

Install the dependencies by running `npm install` in the terminal.

Start the app by running `npm start` in the terminal. The app is running at `http://localhost:9999/`. There is no hot reloading so you need to refresh the page every time a change is made.