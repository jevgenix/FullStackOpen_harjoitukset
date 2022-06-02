// Taulukot
const t = [1, -1, 3];

console.log(t.length); // tulostuu 3
console.log(t[1]); // tulostuu -1

t.push(5); // lisätään taulukkoon luku 5

console.log(t.length); // tulostuu 4

let s = 0;
t.forEach((value) => {
  s += value; // tulostuu 1, -1, 3, 5 omille riveilleen
});

console.log(s); // tulostuu 8

const t2 = t.concat(6, 9);

console.log(t); // tulostuu [1, -1, 3, 5]
console.log(t2); // tulostuu [1, -1, 3, 5, 6]

const m1 = t2.map((value) => value * 2);
console.log(m1);

const [first, second, ...rest] = m1;

console.log(first, second); // tulostuu 2 -2
console.log(rest); // tulostuu [6, 10, 12, 18]
