    // 1. Use strict
    // added in ES 5
    // use this for Valina Javascript. 

    'use strict'; //ECMAScript 5 버전에 있는 새로운 기능으로써,프로그램 또는 함수를 엄격한 운용 콘텍스트 안에서 실행시킬 수 있게끔 함. 이 엄격한 콘텍스트는 몇가지 액션들을 실행할 수 없도록 하며, 좀 더 많은 예외를 발생시킴

    // 2. Variable, rw(read/write) //메모리 값을 읽고 쓰기 가능
    // let (added in ES6)
    // mutable
    let globalName = 'global name';
    {
        let name = 'ellie';
        console.log(name);
        name = 'hello';
        console.log(name);
        console.log(globalName);
    }
    console.log(name);
    console.log(globalName);

    // var (don't ever use this!) //값을 할당하기 전에 출력함 
    // var hoisting(끌어올려주다) 어디에 선언했냐에 상관없이 항상 제일 위로 끌어올리는것
    // has no block scope {}이 없음
    {
        console.log(age);
        age = 4;
        console.log(age);
        var age;
    }

    // 3. Constant(단수). r(read only) 한번 할당하면 값이 바뀌지 않음 읽기만 가능하고 다른값 못씀
    // use const whenever possible.
    // only use let if variable needs to change.
    
    const daysInWeek = 7;
    const maxNumber = 5;

    // Note!
    // Immutable date types: premitive types, frozen objects (i.e. object.freeze()) 
    // Mutable data types: all objects by default are mutable in JS // objects 는 계속 변경가능
    // favor immutable data type always(웬만하면 값을 할당한 다음에 다시는 변경되지 않는 그런 데이터 type을 사용해라) for a few reasons:
    // - security 
    // - thread safety
    // - reduce human mistakes

    // 4. Variable types
    // Primitive, single item: number, string, boolean, null, undefiedn,symbol 작은단위로 나누어 질수 없는 한가지 아이템
    // object, box container single item을 여러개로 묶어서 한 단위 한박스로 관리 할 수 있게
    // function, first-class function 변수에 할당이 가능 함수의 파라미터 함수 리턴 가능 

    const count = 17; // integer
    const size = 17.1; // decimal number
    console.log(`value: ${count}, type: ${typeof count}`);
    console.log(`value: ${size}, type: ${typeof size}`);

    //number - speicla numberic values: infinity, -infinity, NaN
    const infinity = 1 /0;
    const negaiveInfinity = -1 / 0;
    const nAn = 'not a number' / 2;
    console.log(infinity);
    console.log(negaiveInfinity);
    console.log(nAn);

    // bigInt (fairly new, don't use it yet)
    const bigInt = 1234567890123456789012345678901234567890n; // over(-2**53) ~ 2*53)
    console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
    // Number.MAX_SAFE_INTEGER;

    // String
    const char = 'c';
    const brendan = 'brendan';
    const greeting = 'hello' + brendan;
    console.log(`value: ${greeting}, type: ${typeof greeting}`);
    const helloBob = `hi ${brendan}!`; // template literals (string)
    console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
    console.log('value: ' + helloBob + ' type: ' + typeof helloBob);
    
    // boolean 참 과 거짓
    // false : 0, null, nudefined, NaN, '' 다 false 간주
    // true: any other value 1~string 값은 다 true
    const canRead = true;
    const test = 3 < 1; // false
    console.log(`value:${canRead}, type : ${typeof canRead}`);
    console.log(`value:${test}, type: ${typeof test}`);

    // null 
    let nothing = null;
    console.log(`value: ${nothing}, type: ${typeof nothing}`);

    // undifined
    let x;
    console.log(`value: ${x}, type: ${typeof x}`);

    //symbol, create unique identifiers fot objercts 
    //map 다른 자료구조 고유한 식별자가 필요하거나 동시다발적으로 우선순위를 주고싶을때 사용

    const symbol1 = Symbol('id');
    const symbol2 = Symbol('id');
    console.log(symbol1 === symbol2)
    const gsymbol1 = Symbol.for('id'); //주어진 스트링에 맞는 심볼을 만들어주는것
    const gsymbol2 = Symbol.for('id');
    console.log(gsymbol1 === gsymbol2)
    console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)
    // object, real-life object, data structure
    const ellie = {name: 'ellie', age: 20};
    ellie.age = 21; // 변경 가능
    console.log(ellie)
    // 5. Dynamic typing : dynamically typed language 
    let text = 'hello';
    console.log(text.charAt(0));
    console.log (`value: ${text}, type: ${typeof text}`);
    text = 1;
    console.log (`value: ${text}, type: ${typeof text}`);
    text = '7' + 5;
    console.log (`value: ${text}, type: ${typeof text}`);
    text = '8'/'2';
    console.log (`value: ${text}, type: ${typeof text}`);
    // console.log(text.charAt(0)); 에러발생