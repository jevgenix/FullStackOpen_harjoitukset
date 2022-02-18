const points = { 0: 1, 1: 3, 2: 4, 3: 2 };

console.log(points);

let biggest_key = 0;
let biggest_value = 0;

Object.keys(points).forEach((key, value) => {
  if (points[key] > biggest_value) {
    biggest_value = points[key];
  }
  console.log(key, points[value]);
});

// max value
console.log(biggest_value);
