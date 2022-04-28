// Oliot

const object1 = {
  name: "Arto Hellas",
  age: 35,
  education: "Filosofian tohtori",
};

const object12 = {
  name: "Full Stack -websovelluskehitys",
  level: "aineopinto",
  size: 5,
};

const object3 = {
  name: {
    first: "Juha",
    last: "Tauriainen",
  },
  grades: [2, 3, 5, 3],
  department: "TKTL",
};

console.log(object1.name); // tulostuu Arto Hellas
const fieldName = "age";
console.log(object1[fieldName]); // tulostuu 35

object1.address = "Tapiola";
object1["secret number"] = 12341;

console.log(object1);

const course = {
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ],
};

console.log(typeof course);

// toinen esimerkki

const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "Filosofian tohtori",
  greet: function () {
    console.log("hello, my name is", this.name);
  },
};

arto.growOlder = function () {
  this.age += 1;
};

console.log(arto.age); // tulostuu 35
arto.growOlder();
console.log(arto.age); // tulostuu 36

setTimeout(arto.greet, 1000); // hello, my name is undefined

// ongelma ratkaistu jos käyttää bind metodia

setTimeout(arto.greet.bind(arto), 1000);
// sekunnin päästä tulostuu hello, my name is Arto Hellas
/*  Komento arto.greet.bind(arto) luo uuden funktion, 
    jossa this on sidottu tarkoittamaan Artoa riippumatta siitä, 
    missä ja miten metodia kutsutaan. */
