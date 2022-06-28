//const 정상적인 실행 예제
//객체 내부의 상태만 변경 할 수 있음.
const CONST_USER = {name : `jay`, age : 30}
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = `jay2`;
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age); 
console.log();

// 안되는 예
CONST_USER = {name:`bbo`}; 
const manam = `kim`;
manam = `lee`;
console.log(manam.name);