"use strict";
let arr = ["Mountain", "River", "Hills", "Valleys"];
arr[0] = "People";
console.log(arr);
// IntentionalError 
// arr[0] = 1;
// Because type number is not assignable to type string.
