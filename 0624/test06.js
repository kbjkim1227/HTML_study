//자료형 변환

console.log("5" +1); // +연산 못함
console.log("5" -1); // -연삼함
console.log("5" *2); // *연산함
console.log("There is " +5);
console.log("Five" *2); // 못함
console.log();

console.log(`- 연산자를 활용한 자료형 변환`);
let str = 5 +"1";
console.log(str);
console.log(typeof str);

let num = str ++;
console.log(num);
console.log(typeof num);
console.log();

console.log(`- 함수를 활용한 자료형 변환`);

str = String(num);
console.log(str);
console.log(typeof str);
num = Number(str);
console.log(num);
console.log(typeof num);
