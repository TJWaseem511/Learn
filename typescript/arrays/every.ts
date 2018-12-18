var isBig = function (element, index, array) { 
    return element >= 5; 
 } 
 let arr1 = [12, 5, 8, 130, 44];          
 var passed = arr1.every(isBig); 
 console.log("Test Value : " + passed );

 var isPos = function (element){
     return element > 0
 };
console.log(arr1.every(isPos));
 