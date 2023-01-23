/*
class Man{

    constructor(name , age){
        this.name = name;
        this.age = age;
        console.log("objekt Man vytovořen");
        console.log(this);
    }

Drink () {
    console.log(this.name+ "Pije");
    this.drive();
}
drive(){
    console.log(`$(this.name) řídí`)
}
}

const myMan= new Man("Pepa" , 20);
const mysMan= new Man("Radim" , 24);
console.log(myMan.name);
console.log(myMan.age);
console.log(mysMan.name);
console.log(mysMan.age);
*/

/*class women {
  constructor(name, age, height, haircolor, eyecolor, widht) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.haircolor = haircolor;
    this.eyecolor = eyecolor;
    this.widht = widht;
    console.log(this);
  }
  Drink() {
    console.log(this.name + "She only drinks juice");
  }

  Study() {
    console.log(this.name + "She graduated from high school");
  }
  Cook() {
    console.log(this.name + "He often cooks sirloin");
  }
  Hobby(){
    console.log(this.name + "must be in motion a bit")
  }
}
const myWomwen = new women("Adela", 16, 175, "Blonde", "Blue", 0, 60);*/


/*
const info = document.getElementById("info");
const upgrade = document.getElementById("upgrade")

class Player {
  constructor(name, hp, mana, money) {
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.money = money;
    console.log(this);
  }
  printinfo(element) {
    element.innerHTML = `
      <p>Name: ${this.name} </p>
      <p>HP:  ${this.hp} </p>
      <p>Mana: ${this.mana} </p>
      <p>Money: ${this.money} </p>
      `;
  }
  upgradeStats(){
    this.hp++;
    this.money++;
    this.mana++
  }
}
const myplayer = new Player("Pepa",100,100,200);
myplayer.printinfo(info);

upgrade.onclick =()=>{
  myplayer.upgradeStats();
  myplayer.printinfo(info);
}*/

class Calculator{

  plus(a, b) {
    return a+b
  }
  minus(a, b) {
    return a-b
  }
  krat(a, b) {
    return a*b
  }
  deleno(a, b) {
    return a/b
  }
}

console.log(myCalc.deleno(5, 4));
const myCalc= new Calculator();



class StaticCalculator{

  static plus(a, b) {
    return a+b
  }
  static minus(a, b) {
    return a-b
  }
  static krat(a, b) {
    return a*b
  }
  static deleno(a, b) {
    return a/b
  }
}
 console.log(StaticCalculator.deleno(5, 4));



  


