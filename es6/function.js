// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing 하나의 함수는 한가지 일만
// nameing: doSomething, commnad, verb 동사형태로
// e.g. create CarAndPoint -> createCard, createPoint
// function is object in JS //function 은 오브젝트이다.

    function printHello() {
        console.log('Hello');
    }
    printHello();

    function log(message) {
        console.log(message);
    }
    log('HEllo@')
    log(1234);

    // TypeScript 는 타입 명시

// 2. Parameters
    // premitive parameters : passed by value
    // object parameters: passed by reference
    function changeName(obj){
        obj.name = 'coder';
    }
    const ellie = {name: 'ellie'};
    changeName(ellie)
    console.log(ellie)

// 3. Default parameters (added in ES6)
    function showMessage(message, from = 'unknown') {
        // if(from === undefined){
        //     from = 'unknown';
        // }
        
        console.log(`${message} by ${from}`);
    }
    showMessage('Hi!');

// 4. Rest parameters (added in ES6)
    function printAll(...args) {
        for (let i = 0; i < args.length; i++) {
            console.log(args[i]);
        }
        for (const arg of args) {  // args > arg
            console.log(arg)
        }
        args.forEach((arg) => console.log(arg));
    }
    printAll('dream', 'coding', 'ellie');

// 5. Local scope
    // 밖에서는 안이 보이지않고 안에서만 밖을 볼수있다.
    let globalMessage = 'global'; // global variable
    function printMessage() {
        let message = 'hell'; // 지역변수
        console.log(message); // local variable
        console.log(globalMessage);
        // function printAnother() {
        //     console.log(message);
        //     let chiledMessage = 'hello';
        // }
        // console.log(chiledMessage); // 에러
        // return undefined; 가 들어가있음 (생략 가능)
    }
    printMessage()

// 6. return a value
    function sum(a, b){
        return a + b;
    }
    const result = sum(1, 2);  // 3
    console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
    // bad
    function upgradeUser(user) {
        if(user.poing > 10) {
            // long upgrade logic...
        }
    }
    
    // good
    function upgradeUser(user) {
        if(user.point <= 10){
            return;
        }
        // long upgrade logic...
    }

    // first-class function
    // functions are treated like any other variable
    // can be assigned as a value to variable
    // can be passed as an argument to other functions.
    // can be returned by another function

// 1. Function expression
    // a function declaration can be called earlier than it is defiend. (hoisted)
    // a function expression is created when the execution reaches it.

    const print = function() { // anonymous function 이름없는 함수
        console.log('print');
    };
    print();
    const printAgain = print;
    printAgain();
    const sumAgain = sum;
    console.log(sumAgain(1, 3));

// 2. Callback function using function expression
    function randomQuiz(answer, printYes, printNo) {
        if(answer === 'love you'){
            printYes();
        } else {
            printNo();
        }
    }
    // anonymous function
    const printYes = function () {
        console.log ('yes!');
    };
    // named function
    // better debugging in debugger's stack traces
    // recursions
    const printNo = function print() {
        console.log('no!');
        // print(); // 이렇게 하면 프로그램 죽음 
    }
    randomQuiz('wrong', printYes, printNo);
    randomQuiz('love you', printYes, printNo);

    // Arrow function
    // always anonymous
    // const simplePrint = function() {
    //     console.log('simplePrint!');
    // };

    const simplePrint = () => console.log('simplePrint!');
    // const add = function (a,b) { 
    //     return a + b;
    // }
    const simpleMultiply = (a,b) => {
        // do something more
        return a * b;
    };
    const add = (a,b) => a + b;

    // IIFE: Immediately Invoked Function Expression
    (function hello() {
        console.log,('IIFE');
    })();

    // Fun quiz time 시발
    // function calculate(command, a , b)
    // command : add, substract, divide, multiply, remainder
    // 정해진것은 switch 문으로 하는게 좋음
    
    const calculate = (command, a , b) =>{
        switch (command) {
            case 'add':
                return a + b;
            case 'substract':
                return a - b;
            case 'divide':
                return a / b;
            case 'multiply':
                return a * b;
            case 'remainder':
                return a % b;
            default:
                throw Error('unkonwn command');
        }
    }
    console.log(calculate('add',2,3));