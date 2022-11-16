function progressBarEmoji (value, maxValue) {
	    let size = 5;
        let barArray = [];
        let fill = Math.round(size * (value / maxValue > 1 ? 1 : value / maxValue));
        let empty = size - fill > 0 ? size - fill : 0;
        for (let i = 1; i <= fill; i++) barArray.push("-fullbar-");
        for (let i = 1; i <= empty; i++) barArray.push("-emptybar-");
        barArray[0] = barArray[0] == "-fullbar-" ? "-fullstart-" : "-emptyStart-";
        barArray[barArray.length - 1] = barArray[barArray.length - 1] == "-fullbar-" ? "-fillEnd-" : "-emptyEnd-";
        return barArray.join(``);
    } 
    
console.log(progressBarEmoji(90, 243))
