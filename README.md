<p align="center">
  <img src="https://img.uxfree.com/wp-content/uploads/2018/04/pixel-loading-bar.jpg">
</p>

## Emoji-ProgressBar
#English:

A simple Javascript code to easily create emoji progress bar for your discord bot.

bruh bruh lmfao bruh lmao lol.

#Vietnamese:

code Javascript đơn giản dễ dàng để tạo thanh tiến trình biểu tượng cảm xúc cho bot discord của bạn.

#French:

code Javascript simple pour créer facilement une barre de progression emoji pour votre bot discord.

#Japanese:

Discord ボットの絵文字プログレス バーを簡単に作成するためのシンプルな Javascript コード。

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
