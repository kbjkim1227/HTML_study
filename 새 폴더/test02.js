//문자열 자르기 = Slice
const sentence = `Wakanda Forever!!`;

console.log(sentence.slice(13));
console.log(sentence.slice(13,24));
console.log(sentence.slice(0));
console.log(sentence.slice(0,-23));
console.log(sentence.slice(50));
console.log(sentence.slice(7,2));

// 문자열 길이 구하기

const arr = ['short', 'long sentence, it is not appropriate'];

arr.forEach(str=>{
    if(str.length<10) console.log(str);     //10보다 작으면 출력해라
});