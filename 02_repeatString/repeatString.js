const repeatString = function(word, iterations) {
    let nTimesWord = "";
    if(iterations >= 0){
      for(let i = 0; i < iterations; i++){
          nTimesWord += word;
      }
    }
    else{
      nTimesWord = "ERROR"
    }  
    console.log(nTimesWord);
    return nTimesWord;
};

// Do not edit below this line
module.exports = repeatString;
