// Q1. make a string out of an array
// 주어진 배열을 string 으로 변경
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result)
}


//  Q2. make an array out of a string
//  주어진 string을 array로 만들기
{
    const fruits = 'apple, banana, orange'
    const result  = fruits.split(',', 2) // limit 전달 하면 거기까지만 나옴
     console.log(result)
}

//  Q3. make this array look like this: [5, 4, 3, 2, 1]
//  
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result)
    console.log(array)
}

//  Q4. make new array without the first two elemnets
//  주어진 array 에서 첫번째 두번째를 제외한 나머지 를 새 array를 만들어라
{
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(0,2);  // splice는 배열 전체를 바꿈
    const result = array.slice(0,2);  // 배열의 특정한 부분을 return 하는 아이
    // slice(start?: number, end?: number): T[]; 원하는 부분만 바꿈
    console.log(result)
    console.log(array)
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

//  Q5. find a student with the score 90 // value
{
    const result = students.find((student) => student.score === 90 ); // arrow function 쓰면 한문장이면 괄호 생략 가능 return 생략  
    console.log(result)
}

//  Q6. make an array of enrolled students
//  수업에 등록한 학생들만 골라서 array 만들기
{
    const result = students.filter((student) => student.enrolled);
    console.log(result)
}

//  Q7. make an array containing only the students' scores
//  result should be: [45, 80, 90, 66, 88]
//  학생들의 array에서 점수만 뽑아서 점수만 들어있는 array 만들기
{
    const result = students.map((student) => student.score); // map 배열안에 들어있는것을 하나하나 다른것으로 변환
    // 함수를 걸쳐서 새로운 값으로 변환
    // 배열안에 있는 모든 요소들을 우리가 전달해준 call back함수를 호출하면서 call back함수에서 가공해진 return 값으로 대체
    console.log(result)
}

//  Q8. check if there is a student with the score lower then 50 
//  학생들 중에 50점 이하가 있는지 없는지
{
    const result = students.some((student) => student.score < 50);
    // callback 함수는 배열 하나하나 확인함
    console.log(result)
    const result2 = !students.every((student) => student.score <= 50);
    // every 모든 요소들이 이 조건을 충족해야 true return 됨
    // 배열중에 어떤것이라도 하나 만족되는것이 있는지 없는지 확인할떄는 some 
    // 모든배열이 만족해야될때는 every 사용
    console.log(result2)
}

//  Q9. compute students' average score // 다시 물어보기 
//  학생들의 평균점수
//  우리가 원하는 시작점부터 모든 array을 돌면서 어떤값을 누적할때 씀 
// {
//     const result = students.reduce((prev, curr) => { // 
//         console.log('-----------')
//         console.log(prev)
//         console.log(curr)
//         return prev + curr.score; // 리턴하는값이 prev로 전달
//     }, 0); // 0 부터 순차적으로 
//     console.log(result)
// }

{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length)
}

// {
//     const result = students.reduceRight((prev, curr) => { // array의 제일 뒤에서 부터 시작
//         console.log('-----------')
//         console.log(prev)
//         console.log(curr)
//         return prev + curr.score; 
//     }, 0);
//     console.log(result)
// }
{
    const result = students.reduceRight((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length)
}

//  Q10. make a string containing all the scores
//  result should be: '45, 80, 90, 66, 88'
//  학생들의 모든점수를 string으로 변환해서 만들기

{ 
    const result = students
    .map((student) => student.score).
    filter((score) => score >= 50).
    join();
    console.log(result)
}

//  Bonus! do Q10 sorted in ascending order
//  result should be: '45, 66, 80, 88 ,90'
//  학생들의 점수를 정렬해서 낮은점수가 제일먼저 나오게해서 string으로 변환

{
    const result = students.map((student) => student.score)
    .sort((a, b)=> a - b) // 오름차순
    //.sort((a, b)=> b - a) // 내림차순
    .join();
    console.log(result);
}

