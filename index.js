function emojibar (fullStart, fullBar, fullEnd, emptyStart, emptyBar, emptyEnd, value, maxValue, size) {
	let barArray = [];
        let full = Math.round(size * (value / maxValue > 1 ? 1 : value / maxValue));
        let empty = size - full > 0 ? size - full : 0;
        for (let i = 1; i <= full; i++) barArray.push(fullBar);
        for (let i = 1; i <= empty; i++) barArray.push(emptyBar);
        barArray[0] = barArray[0] == fullBar ? fullStart : emptyStart;
        barArray[barArray.length - 1] = barArray[barArray.length - 1] == fullBar ? fullEnd : emptyEnd;
        return barArray.join(``);
 }
module.exports = emojibar;

function emojibarv2(Bar1empty, Bar1mid, Bar1full, Bar2empty, Bar2mid, Bar2high, Bar2full, Bar3empty, Bar3mid, Bar3full, value, maxValue, size, percents) {
  let barArray = [];
  if (isNaN(value) || isNaN(maxValue)) throw new Error('maxValue or value is not a number');
  
  if (size < 3) {
    size = 6
    console.warn("if you set the size to less than 3, your size will be reset to 6");
  }
  size = Math.trunc(size);
  const percent = value > maxValue ? 100 :(value / maxValue * 100).toFixed(1);
  const full = Math.floor(size * (value / maxValue > 1 ? 1 : value / maxValue));
  let full_notround = 0;
  if (value < maxValue) {
    full_notround = (size * (value / maxValue > 1 ? 1 : value / maxValue)).toFixed(2);
  } else {
    full_notround = size;
  };
  const full_trunc = size * (value / maxValue > 1 ? 1 : value / maxValue); 
  const full_ceil = Math.ceil(size * (value / maxValue > 1 ? 1 : value / maxValue));
  const full_decimal = (full_notround - Math.trunc(full_notround)).toFixed(2);
  console.log(full_decimal, full, full_notround, full_ceil)
  const empty = size - full > 0 ? size - full : 0;

  if (value < maxValue) {
    for (let i = 1; i <= full; i++) barArray.push(Bar2full);
    for (let i = 1; i <= empty; i++) barArray.push(Bar2empty);


    if ((full_decimal > 0.2) && (full_decimal <= 0.8)) {
      barArray[full] = Bar2mid;
    } else if (full_decimal <= 0.2 && full_notround < 2) {
      barArray[full - 1] = Bar2full;
      barArray[full] = Bar2mid;
    } else if (full_decimal <= 0.2) {
      barArray[full - 1] = Bar2empty;
      barArray[full - 2] = Bar2high;
      if (full_notround < 3) barArray[full - 1] = Bar2high;
    } else if (full_decimal > 0.8 && full_trunc <= size - 1 && full_ceil == 1) {
      barArray[full] = Bar2full;
      barArray[full + 1] = Bar2mid;
    } else if (full_decimal > 0.8 && full_trunc <= size - 1) {
      if (full_ceil == 2) barArray[full] = Bar2high;
      barArray[full] = Bar2high;
    } else if (full_decimal > 0.8 && full_trunc > size - 1) {
      barArray[full] = Bar2high;
    };
  } else if (value >= maxValue) {
    for (let i = 1; i <= full; i++) barArray.push(Bar2full);
  };
  const barlen = barArray.length;

  switch (barArray[0]) {

    case Bar2full: {
      barArray[0] = Bar1full;
      break;
    }

    case Bar2high: {
      barArray[0] = Bar1full;
      break;
    }

    case Bar2mid: {
      barArray[0] = Bar1mid;
      break;
    }

    default: {
      barArray[0] = Bar1empty;
      break;
    }
  };

  switch (barArray[barlen - 1]) {

    case Bar2full: {
      barArray[barlen - 1] = Bar3full;
      break;
    }

    case Bar2high: {
      barArray[barlen - 1] = Bar3full;
      break;
    }

    case Bar2mid: {
      barArray[barlen - 1] = Bar3mid;
      break;
    }

    default: {
      barArray[barlen - 1] = Bar3empty;
      break;
    }
  };
  
  if (percents == true) {
    return {
      barString: barArray.join(` `),
      percent: barArray.join(` `) +' '+ percent
    };
  } else {
    return barArray.join(` `);
  };
  
};

module.exports = emojibarv2;