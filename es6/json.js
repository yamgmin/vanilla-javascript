//  JSON
//  JavaScript Object Notation

// 1. Object to JSON

// striongfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json)

// 함수는 obj 데이터가 아님라서 제외 js 자체에 들어있는 특별한 데이터 (Symbol) 도 포함되지않음
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () =>{ 
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit, ['name', 'color']); // 함수 배열 형태로 전달가능 
// 내가 원하는 property만 골라서 정의가능
console.log(json)

json = JSON.stringify(rabbit, (key, value) =>{
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'name' ? 'ellie' : value; 
});
console.log(json)
// 키가 이름이라는것이 들어오면 무조건 ellie 라는 벨류로 설정하고 key 가 name아닌경우 원래 오리지널 value를 써야지 설정

// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit);
console.log(json)
// const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj)
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // string 이기 때문에
console.log(obj.birthDate.getDate());


// JSONDiff.com 서버에게 요청했을때 첫번째로 받아온 데이터와 두번째 데이터 비교할때 사용 문제 디버깅 할때 유용
// JsonBeautifier.org 

// JsonParser.org 오브젝트 확인

// JsonVailidation