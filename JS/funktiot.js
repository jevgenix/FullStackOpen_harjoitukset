// funktiot

const sum = (p1, p2) => {
  console.log(p1 + " + " + p2);
  return p1 + p2;
};

const result = sum(1, 5); // tulostuu 1 5 ja 6
console.log(result);

// jos parametreja on vain yksi, sulut voidaan jättää pois

const square_1 = (p) => {
  console.log(p);
  return p * p;
};

const square_2 = (p) => p * p;

const t = [1, 2, 3];
const tSquared = t.map((p) => p * p);
console.log(tSquared);

const check = square_1(5); // tulostuu 5 ja 25
console.log(check);
