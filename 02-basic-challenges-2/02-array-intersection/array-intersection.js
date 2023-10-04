function arrayIntersection(arr1, arr2) {
// const intersection =[];

// for (let i = 0; i < arr1.length; i++){
//     if(arr2.includes(arr1[i]) && !intersection.includes(arr1[i])){
//         intersection.push(arr1[i]);
//     }
// }
// return intersection;
// }
const set1 = new Set(arr1);
const intersection = [];

for ( let num of arr2){
    if (set1.has(num)){
        intersection.push(num);
    }
}
return intersection;
}
module.exports = arrayIntersection;
