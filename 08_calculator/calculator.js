const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;	
};

const sum = function(arr) {
    let sigma = 0;
    for(let i = 0; i < arr.length; i++){
        sigma = sigma + arr[i];
    }
    return sigma;
};

const multiply = function(arr) {
    let sigma = 1; 
    for(let i = 0; i < arr.length; i++){
        sigma = sigma * arr[i];
    }
    return sigma;
};

const power = function(x, y) {
   if(isNaN(x) || isNaN(y)){
       return -1
    }
    return  Math.pow(x,y);	
};

const factorial = function(x) {
	if(x == 0){
    return 1;
    }
    else {
    return x * factorial(x-1);
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
