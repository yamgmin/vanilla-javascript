// 1. String concatenation

    console.log('my' + 'cat');
    console.log('1' + 2 );
    console.log(`string literals: 1 + 2 = ${1 + 2}`) // 그냥 문자열로 변환해서 나옴  

    console.log("ellie's \n\tbook");

// 2. Numberic operators
    console.log( 1 + 1); // add 더하기
    console.log( 1 - 1); // substract 빼기
    console.log( 1 / 1); // divide 나누기
    console.log( 1 * 1); // multiply 곱셈
    console.log( 5 % 2); // remainder 나머지
    console.log( 2 ** 3); // exponentiation 제곱

// 3. Increament and decrement operators
    let counter = 2;
    const preIncrement = ++counter;
    // counter = counter + 1;
    // preIncrement = counter;
    console.log(`preIncreament: ${preIncrement}, counter: ${counter}`);
    const postIncreament = counter++;
    // postIncreament = counter
    // counter = counter + 1;
    console.log(`postIncreament: ${postIncreament}, counter: ${counter}`);
    const preDecrement = --counter;
    console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
    const postDecrement = counter--;
    console.log(`preDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
    let x = 3;
    let y = 6;
    x += y; // x = x + y;
    x -= y; // x = x - y;
    x *= y; // x = x * y;
    x /= y; // x = x / y;
    
// 5.  Comparison operators
    console.log(10 < 6); // less than
    console.log(10 <= 6); // less than or equal
    console.log(10 > 6); // greater than
    console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
    const value1 = false;
    const value2 = 4 < 2;

    // || (or), fines the first truthy value // 첫 번째 true 가 나오면 멈춤
    console.log(`or: ${value1 || value2 || check()}`);

    // && (and), fines the first truthy value 
    console.log(`or: ${value1 && value2 && check()}`);

    // often used to compress long if-statement
    // nullableObject && nullableObject.something
    // if (nullableObject != null){
    //     nullableObject.something;
    // }

    function check() {
        for(let i = 0; i < 10; i++){
            // wasting time
            console.log("?")
        }
        return true;
    }

    // ! (not) const value1 : true; 반대로 변경
    console.log(!value1);

// 7.  Equality
    const stringFive = '5';
    const numberFive = 5;

    // == loose equality, with type conversion // type 을 변경해서 검사함 
    console.log(stringFive == numberFive);
    console.log(stringFive != numberFive);

    // === stirct equality, no type conversion // type이 다르면 다른아이다
    console.log(stringFive === numberFive);
    console.log(stringFive !== numberFive);

    // object equality by reference
    const ellie1 = { name: ' ellie' };
    const ellie2 = { name: ' ellie' };
    const ellie3 =  ellie1;
    console.log(ellie1 == ellie2);
    console.log(ellie1 === ellie2);
    console.log(ellie1 === ellie3);

    // equality - puzzler
    console.log(0 == false);
    console.log(0 === false); 
    console.log('' == false);
    console.log('' === false);
    console.log(null == undefined);
    console.log(null === undefined);

// 8. Conditional operators: if
    // if, else if, else
    //const name = 'ellie';
    // const name = 'coder';
    const name = 'asdf'
    if(name === 'ellie'){
        console.log( 'Welcome, Ellie!');
    } else if (name === 'coder'){
        console.log('You are amazing coder');
    } else {
        console.log('unkwnon')
    }

// 9. Ternary operator: ?
    //condition ? value1 : value2;
    console.log(name === 'ellie' ? 'yes' : 'no'); // true 왼쪽 false 오른쪽 간단할때만 사용하면 좋음

// 10. Switch statement
    // use fot multiple if checks
    // use for enum-like value check
    // use for multiple type checks in TS
    const browser = 'IE';
    switch (browser) {
        case 'IE':
            console.log('go away!');
            break;
        case 'Chrome': // 반복일땐 이렇게 사용
        case 'Firefox':
            console.log('love you!');
            break;
        // case 'Firefox':
        //     console.log('love you!');
        //     break;
        default:
            console.log('same all!');
            break;
    }

// 11. Loops 
    // 조건문이 맞을 때 블럭을 실행 할때는 조건문 while 사용
    // while loop, while the condition is truthy,
    // body code is executed.
    let i = 3;
    while (i > 0) {
        console.log(`while: ${1}`);
        i--;
    }

    // 블럭을 먼저 실행할땐 do
    // do while loop, body code is executed first,
    // then check the condition. 
    do { 
        console.log(`do while: ${i}`);
        i--;
    } while (i > 0);

    // for loop, for(begin; condition; step)
    for ( i = 3; i > 0; i--) {
        console.log(`for: ${i}`);
    }

    for (let i = 3; i> 0; i = i -2) {
        //inline variable declaration
        console.log(`inline variable for: ${i}`);
    }

    // nested loops
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++){
            console.log(`i: ${i}, j:${j}`);
        }
    }
    
    // break, continue
    // Q1. iterate from 0 to 10 and print only even numbers (use continue)
    for (let i = 0; i < 11; i++){
        if ( i % 2 !== 0 ){
            continue;
        }
        console.log(`q1. ${i}`)
    }
    // Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
    for (let i = 0; i < 11; i++){
        if ( i> 8 ){
            break;
        }
        console.log(`q2. ${i}`)
    }