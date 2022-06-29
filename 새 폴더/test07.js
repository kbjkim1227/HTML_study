// 배열 요소를 분할 및 변환(from)

const str = '12345678';

const distributeArr = Array.from(str);
console.log(distributeArr);

console.log('----------------------')

const modifiedArr = Array.from(distributeArr, el => el * 2);//문자가 숫자로 바뀜
console.log(modifiedArr);