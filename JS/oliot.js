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
