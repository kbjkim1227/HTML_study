//while문과 do~while문 사용

const hometown = [                                                      //초기값
    {name : '진', city : '과천'},
    {name : '남준', place : '일산', city: '고양'},
    {name : '호석', place : '광주', city: '전라도'},
    {name : '지민', place : '부산', city: '경상도'},
];

let isHometown = function(h, name){                                     // 함수 생성
    console.log(`함수가 실행되었습니다. ${h.city} 도시에서 ${name}을 찾습니다.`);

    if(h.name === name ){               
        console.log(`${h.name}의 고향은 ${h.city} ${h.place}입니다.`);
        return true;
        }
    return false;
}

let h;                                               // h에는 name,place,city의 값이 다 들어간다

while (h = hometown.shift()){                                           // 실행문
    if(!h.name || !h.place || !h.city) continue;    // 셋중에 하나라도 비어있으면 지나가라 (진은 place가 비어있으므로 지나감)
                                                    
    var result = isHometown(h, '호석');
    if(result) break;
}

let i = 0;                                                          // 두번째 실행문
const names = ['남준','정국','윤기','호섭'];
const cities = ['경기', '부산', '대구', '광주'];

do{
    hometown[i] = {name : names[i], city:cities[i]};
    i++;
}while(i < 4);

console.log(hometown);