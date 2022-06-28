//호이스팅 - 함수를 선언하기 전에 호출이 가능
//일반적으로는 함수를 선언 후 호출하지만 호출 후 선언이 가능한 것.

hello();
function hello(){
    console.log("안녕하세요");
}

console.log();


let hello2 =function(){
    console.log("안녕하세요");
}
hello2();
