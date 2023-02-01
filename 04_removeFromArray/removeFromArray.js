const removeFromArray = function(array, ...moreRemove) {
    let newArray = array,i=0;
    const remove = Array.from(moreRemove).sort();
    console.log( "im remove: "+ remove);
   
    for(i = 0; i<array.length; i++){
        for(let removes of remove){

            console.log( "im outter"+"Value: "+array[i]+" Remove: " +removes);

            if(array[i] === removes){

                console.log( " bef im inner"+"Value: "+array[i]+" Remove: " +removes);
                let indexof = array.indexOf(array[i]);
                array.splice(indexof,1);
                i--;
                
            }
        }
    }

   
    console.log( array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
