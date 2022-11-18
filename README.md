<p align="center">
  <img src="https://user-images.githubusercontent.com/90708399/202263148-13193bf4-4c1d-4671-9159-8d3c850d18ca.jpg">
</p>

## Emoji-ProgressBar
#English:

A simple Javascript code to easily create emoji progress bar for your discord bot.

bruh bruh lmfao bruh lmao lol.

#Vietnamese:

code Javascript đơn giản dễ dàng để tạo emoji progress bar cho bot discord của bạn.

#French:

code Javascript simple pour créer facilement une barre de progression emoji pour votre bot discord.

#Japanese:

Discord ボットの絵文字プログレス バーを簡単に作成するためのシンプルな Javascript コード。

## How to use it

```javascript
const progressBarEmoji require("emoji-progressbar");
var progressbar = progressBarEmoji(fullStart, fullBar, fullEnd, emptyStart, emptyBar, emptyEnd, value, maxValue, size);
```

## Code example
```js
//emoji default
console.log(progressBarEmoji(🇻🇳, 🐸, 💀, 🗿, 👌, 🙏, 10, 20, 5));
//return 🇻🇳🐸🐸👌🙏
console.log(progressBarEmoji(🇻🇳, 🐸, 💀, 🗿, 👌, 🙏, 200, 200, 5));
//return 🇻🇳🐸🐸🐸💀
console.log(progressBarEmoji(🇻🇳, 🐸, 💀, 🗿, 👌, 🙏, 0, 200, 5));
//return 🗿👌👌👌🙏
```
## Emoji discord | example image
<p align="left">
<img src="https://user-images.githubusercontent.com/90708399/202264437-4de9a537-0841-4410-b602-e9eff99828fc.JPG">
</p>
