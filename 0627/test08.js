//클로저 이해하기
//클로저(increase함수와 getCount 함수)는 createCounterCourse 실행 컨텍스트의 렉시컬 환경을 기억하고 있는 클로저가 됨.

function createCounterCourse(){
    let count = 0 ;
    return{
        increase :function(){
            count++;
        },
        getCount :function(){
            return count;
        }
    };
}

const counter1 = createCounterCourse();
const counter2 = createCounterCourse();

counter1.increase();
counter1.increase();
console.log(`카운터 1의 값 : ` +counter1.getCount());
counter2.increase();
console.log(`카운터 2의 값 : ` +counter2.getCount());