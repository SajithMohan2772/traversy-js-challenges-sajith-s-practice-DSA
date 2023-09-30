function findMaxNumber(arr) {
// return Math.max(...arr);
let max = 1;
for(let i = 1; i<arr.length; i++){
    if( arr[i]>max ){
        max = arr[i];
    }
}
return max;
}

module.exports = findMaxNumber;
