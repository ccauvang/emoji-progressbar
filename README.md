<p align="center">
  <img src="https://img.uxfree.com/wp-content/uploads/2018/04/pixel-loading-bar.jpg">
</p>

## Text-ProgressBar
A simple Javascript code to easily create text progress bar for your discord bot.
It also works with all kind of programs.

## How to use it

```javascript
var progressbar = progressBarEmoji (fullStart, fullBar, fullEnd, emptyStart, emptyBar, emptyEnd, value, maxValue, size);
```

## Code example
```js
//emoji default
console.log(progressBarEmoji (🇻🇳, 🐸, 💀, 🗿, 👌, 🙏, 10, 20, 5));
//return 🇻🇳🐸🐸👌🙏
console.log(progressBarEmoji (🇻🇳, 🐸, 💀, 🗿, 👌, 🙏, 200, 200, 5));
//return 🇻🇳🐸🐸🐸💀
console.log(progressBarEmoji (🇻🇳, 🐸, 💀, 🗿, 👌, 🙏, 0, 200, 5));
//return 🗿👌👌👌🙏
```
## Emoji discord | example image
