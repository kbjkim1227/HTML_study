//자바스크립트는 기본적으로 전역과 함수 단위로 스코프를 생성
//ES6에서 추가된 let 지역, 이전부터 사용된 var 전역\

var a = 10;
console.log(a);

function print(){
    var b = 20;
    if(true){
        var c = 30;
    }
    console.log(c);
}

print();
console.log(b);
