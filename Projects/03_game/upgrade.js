class User {
    name;
    money;
    sword;
  
    constructor(name, money, sword){
      this.name = name;
      this.money = money;
      this.sword = sword
    }

    getName(){
      return this.name;
    }

    getMoney(){
      return this.money
    }

    getSword(){
      return this.sword
    }
  
    enhance(){
      if(!this.sword) {
        return '칼이 없습니다.';
      }
      
      if( this.money < this.sword.getEnhanceCost() ){
      
        return '돈이 부족합니다';
      }

      if(!this.sword.canEnhance()){
        return '강화할 수 없습니다.';
      }

      const res = this.sword.enhance()
      this.money -= this.sword.getEnhanceCost()
      return res


    }
  
  }
  
  class Sword {
    name;
    damage=1;
    level=1;
    maxLevel=9
    enhanceCostPerLevel = [0,1,2,3,4,5,6,7,8,9]
    enhanceCostPerPropobility = [0,100, 64, 32, 16, 8, 4, 2, 1]
    damagePerLevel = [0,1,2,4,8,16,32,64,128, 256]
  
    constructor(name){
      this.name = name
    }
  
    canEnhance (){
      return this.level < this.maxLevel
    }
  
    getLevel(){
      return this.level;
    }
  
    getDamage(){
      return this.damage;
    }

    getEnhanceCost (){
      return this.enhanceCostPerLevel[this.level]
    }
  
    getEnhancePropobility (){
      return this.enhanceCostPerPropobility[this.level]
    }
  
    enhance(){
      if(this.level >= this.maxLevel){
        return;
      }
  
      if(Math.random()*100 <= this.enhanceCostPerPropobility[this.level]  ){
        const nextLevel = this.level+1;
  
        this.level = nextLevel;
        this.damage = this.damagePerLevel[nextLevel];
  
        return true;
      }else{
        return false;
      }
  
  
    }
  
  
  }
  
const name = document.getElementById('name')
const money = document.getElementById('money')
const level = document.getElementById('level')
const damage = document.getElementById('damage')
const cost = document.getElementById('cost')
const propobility= document.getElementById('propobility')
const enhanceButton =document.getElementById('enhance')
const message = document.getElementById('message')


const sword = new Sword('sword')
const min = new User('min', 1000, sword)


const draw=()=>{

  name.innerText = `name: ${min.getName()}`
  money.innerText = `money: ${min.getMoney()}`
  
  level.innerText = `level: ${min.getSword().getLevel()}`
  damage.innerText = `damage: ${min.getSword().getDamage()}`
    
  cost.innerText = `비용: ${min.getSword().getEnhanceCost()}`
  propobility.innerText = `확률: ${min.getSword().getEnhancePropobility()}`
  enhance.innerText = '업그레이드'

}


enhanceButton.addEventListener('click', ()=>{
   const res = min.enhance() 

   const getMessage = ( ) =>{
     if(typeof res === 'string'){
      return res
     }else if(res){
      return `강화에 성공하셨습니다. level (${min.getSword().getLevel()-1} -> ${min.getSword().getLevel()})`
    }else{
      return `강화에 실패하셨습니다. `
    }
   }

   message.innerText =  getMessage()
   
    draw()

  })

draw()