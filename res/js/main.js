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

class women {
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
const myWomwen = new women("Adela", 16, 175, "Blonde", "Blue", 0, 60);
