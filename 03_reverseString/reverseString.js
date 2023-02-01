const reverseString = function(word) {
    let reversedWord = '';
    for(let i = 0; i < word.length; i++){
        let lengthIndex = word.length -1;
        reversedWord += word.charAt(lengthIndex - i);
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
