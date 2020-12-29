'use strict';

// Array

// 1. Declaration
    
    const arr1 = new Array(); // 배열 만들수 있음
    const arr2 = [1, 2]

// 2. Index position

    const fruits = ['apple','banana']
    console.log(fruits);
    console.log(fruits.length);
    console.log(fruits[0],fruits[1],fruits[2]);
    console.log(fruits[0]) // 첫번째 찾을때
    console.log(fruits[fruits.length-1]) // 마지막꺼 찾을때

    console.clear();
// 3. Looping over an array
    // print all fruits
    // a. for
    for (let i = 0; i<fruits.length; i++){
        console.log(fruits[i])
    }

    // b. for of
    for (let fruit of fruits) {
        console.log(fruit);
    }

    // c forEach 
    // callbackfn 함수 
    // fruits.forEach(function(fruit,index) { 
    
    //     console.log(fruit,index);
    // });
    
    // 이름없는 함수는 arrow func 사용가능
    fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
    // push : add an item to the end
    fruits.push('Strawberry', 'peach')
    console.log(fruits)
    // pop : remove an item from the end
    fruits.pop();
    fruits.pop();
    console.log(fruits)

    // unshift : add an item to the benigging 앞에서 부터 데이터 넣을 수 있음
    fruits.unshift('Strawberry','peach');
    console.log(fruits)
    
    // shift : remove an itemp from the benigging 앞에서부터 데이터 뺄수 있음
    fruits.shift()
    fruits.shift()
    console.log(fruits)

    // note!! shift, unshift are slower than pop, push 
    // pop, push 보다 느림 unshift,shift 보단 pop, push 사용하십셔
    // splice : remove an item by index position
    fruits.push('Strawberry','peach','lemon')
    console.log(fruits)
    fruits.splice(1) // 지정한 index 부터 모든데이터 삭제
    console.log(fruits) 
    fruits.splice(1,3) // 시작하는 index 부터 지정한 곧까지 삭제
    console.log(fruits) 
    fruits.splice(1, 1, 'apple', 'melon')
    console.log(fruits) 

    //combine two arrays
    const fruits2 = ['oh', 'ooh'];
    const newFruits = fruits.concat(fruits2);
    console.log(newFruits)

// 5. Searching
    // find the index
    console.clear();
    console.log(fruits);
    console.log(fruits.indexOf('apple')); // 위치 찾기
    console.log(fruits.indexOf('melon'));
    
    // includes
    console.log(fruits.includes('apple')); // 있다 
    console.log(fruits.includes('melon')); 

    // lastIndexOf 
    console.clear();
    fruits.push('apple')
    console.log(fruits);
    console.log(fruits.indexOf('apple'));
    console.log(fruits.lastIndexOf('apple'));
