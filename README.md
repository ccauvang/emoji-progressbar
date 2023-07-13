<p align="center">
  <img src="https://user-images.githubusercontent.com/90708399/202263148-13193bf4-4c1d-4671-9159-8d3c850d18ca.jpg">
</p>

## Emoji-ProgressBar
#English:

A simple Javascript code to easily create emoji progress bar for your discord bot.

#Vietnamese:

code Javascript đơn giản dễ dàng để tạo emoji progress bar cho bot discord của bạn.

#French: (gg translate)

code Javascript simple pour créer facilement une barre de progression emoji pour votre bot discord.

#Japanese: (gg translate)

Discord ボットの絵文字プログレス バーを簡単に作成するためのシンプルな Javascript コード。

## How to use it

```javascript
const emojibar = require("emoji-progressbar");
var progressbar = emojibar(fullStart, fullBar, fullEnd, emptyStart, emptyBar, emptyEnd, value, maxValue, size);

//v2
const emojibarv2 = require("emoji-progressbar");
var progressbar = emojibarv2(Bar1empty, Bar1mid, Bar1full, Bar2empty, Bar2mid, Bar2high, Bar2full, Bar3empty, Bar3mid, Bar3full, value, maxValue, size);
```

## Code example
```js
//emojibar
console.log(emojibar("🇻🇳", "🐸", "💀", "🗿", "👌", "🙏", 10, 20, 5));
//return 🇻🇳🐸🐸👌🙏
console.log(emojibar("🇻🇳", "🐸", "💀", "🗿", "👌", "🙏", 200, 200, 5));
//return 🇻🇳🐸🐸🐸💀
console.log(emojibar("🇻🇳", "🐸", "💀", "🗿", "👌", "🙏", 0, 200, 5));
//return 🗿👌👌👌🙏
//----//
//emojibarv2
console.log(emojibarv2('1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟', 50, 100, 6));
//return 3️⃣6️⃣4️⃣4️⃣4️⃣8️⃣
console.log(emojibarv2('1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟', 90, 100, 6));
//return 3️⃣7️⃣7️⃣7️⃣7️⃣9️⃣
```
## Emoji discord | example image
<p align="left">
<img src="https://user-images.githubusercontent.com/90708399/202264437-4de9a537-0841-4410-b602-e9eff99828fc.JPG">
</p>
