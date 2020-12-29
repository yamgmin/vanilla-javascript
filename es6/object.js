// Objects
    // one of the JavaScript's data types.
    // a collection of related data and/or functionality.
    // Nearly all objects in JavaScript are instances of Object
    // object = {key : value}; 집합체

// 1. Literals and properties
    // const name = 'ellie';
    // const age = 4;
    // print(name, age);
    const obj1 = {}; // 'object literal' syntax
    const obj2 = new Object(); // 'object constructor' syntax
    function print(person) {
        console.log(person.name);
        console.log(person.age)
    }

    const ellie = {name: 'ellie', age: 4};
    print(ellie);

    // Runtime : 프래그램이 동작하고 있을때
    // with JavaScript magic (dynamically typed language)
    // can add properties later
    ellie.hasJob = true;
    console.log(ellie.hasJob)

    delete ellie.hasJob;
    console.log(ellie.hasJob)

// 2. Computed properties 
    // (스트링 타입) key should be always string
    console.log(ellie.name);
    console.log(ellie['name']); // 정확히 어떤 키가 필요한지 모를때
    ellie['hasJob'] = true;
    console.log(ellie.hasJob)

    function printValue(obj, key) {
        // console.log(obj.key) //obj key 라는 property 가 있냐
        console.log(obj[key])
    }
    printValue(ellie, 'name')
    printValue(ellie, 'age')

// 3. Property value shorthand

    const person1 = {name: 'bob', age: 2};
    const person2 = {name: 'steve', age: 3};
    const person3 = {name: 'dave', age: 4};
    // const person4 = makePerson('ellie', 30);
    const person4 = new Person('ellie', 30);
    console.log(person4);
    // function makePerson(name, age) { 
    //     return {
    //         name, // key value 동일하면 생략가능 name: name
    //         age,
    //     };
    // }
    //순수한 오브젝트 함수들은 앞에 대문자로 시작하도록 함수 만듬 return 쓰지않고 this.name 작성

// 4. Constuctor function

    function Person(name, age) {
        // this = {}; 
        this.name = name;
        this.age = age;
        // return this;
    }

// 5. in operator: property existence check ( key in obj) 해당하는 오브젝트에 키가 있는지 확인
    console.log('name' in ellie);
    console.log('age' in ellie);
    console.log('random' in ellie);
    console.log(ellie.random);

// 6. for..in vs for..of 
    // for (key in obj) 
    console.clear();
    for (key in ellie) { // ellie 가 가지고 있는 key 들이 key 지역변수에 할당
        console.log(key)
    }

    // for 배열과 같은 배열 리스트 순차적으로 데이터가 담겨져있는 모든값
    const array = [1, 2, 3, 4, 5];
    for(value of array) {
        console.log(value)
    }

// 7. Fun cloning 복사복사
    // Object.assign(dest, [obj1, obj2, obj3...])
    const user = {name: 'ellie', age: '20' };
    const user2 = user;
    user2.name = 'coder';
    console.log(user)

    // old way 
    const user3 = {}; // 빈오브젝트 만들고 
    for (key in user) { // 첫번째 key : name 두번째 key :age 
        user3[key] = user[key];
    }
    console.clear();
    console.log(user3)

    // const user4 = {};
    const user4 = Object.assign({},user);
    Object.assign(user4, user) // target: T, source: u t,u
    console.log(user4);

    // another example
    const fruit1 = { color: 'red'};
    const fruit2 = { color: 'blue', size: 'big'};
    const mixed = Object.assign({},fruit1,fruit2) // 뒤에서 계속 덮어씌어줌
    console.log(mixed.color,mixed.size);
    