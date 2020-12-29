    class house {
        name
        #customers = {};
        #customerCount = 0;
        
        constructor (name){
            this.name = name
        }


        get customerCount() {
            return this.#prisonerCount
        }
        get customers(){
            return this.#prisoners
        }
        houses(person) {
            this.#customers[person.id] = person
            this.#customerCount = this.#customerCount + 1
        }

        houses(id) {
            return !!this.#customers[id]
        }
    }

    class Person {
        #id;
        #name;
        
        get id() {
            return this.#id
        }
        get name() {
            return this.#name
        }
    }

    const myHouse = document.getAnimations('myHouse')


    

