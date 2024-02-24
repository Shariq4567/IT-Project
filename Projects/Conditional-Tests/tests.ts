let car = "Lambo";
let bus = "School bus";
let strNum = "8";
let num = 8;
let strNum2 = "5";
let num2 = 5;
let language = "javascript";
let language2 = "python";
let arr = ["car", "bus", "strNum", "strNum2", "language", "language2"]
//True
console.log(car !== "Ferrari");
console.log(bus === "School bus");
console.log(strNum == "8");
console.log(strNum.length === strNum.length);
console.log(typeof(num) === typeof(num2));
console.log("JAVASCRIPT".toLowerCase === "javascript".toLowerCase);
console.log(bus === "School bus" && car === "Lambo");
console.log("car" in arr);
//False
console.log(car !== "Lambo");
console.log(bus === "WII");
console.log(strNum === "10");
console.log(strNum2 === "15");
console.log(car.length === bus.length);
console.log("JavaScript".toUpperCase === "javascript".toLocaleLowerCase);
console.log(strNum === "10" || strNum2 === "15");
console.log("snake" in arr);