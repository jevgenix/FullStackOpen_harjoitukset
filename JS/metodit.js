// Olioiden metodit ja this

const arto = {
  name: "Arto Hellas",
  age: 35,
  education: "Filosofian tohtori",
  greet: function () {
    console.log("hello, my name is", this.name);
  },
  doAddition: function (a, b) {
    console.log(a + b);
  },
};
arto.growOlder = function () {
  this.age += 1;
};

arto.greet(); // tulostuu hello, my name is Arto Hellas

console.log(arto.age); // tulostuu 35
arto.growOlder();
console.log(arto.age); // tulostuu 36

arto.doAddition(1, 4);

const referenceToAddition = arto.doAddition;
referenceToAddition(10, 15); // tulostuu 25

//this katoaa esimerkiksi, jos pyydetään Artoa tervehtimään sekunnin kuluttua metodia setTimeout käyttäen:
setTimeout(arto.greet, 1000);
// sekunnin päästä tulostuu hello, my name is undefined

/**Komento arto.greet.bind(arto) luo uuden funktion,
 * jossa this on sidottu tarkoittamaan Artoa riippumatta siitä,
 * missä ja miten metodia kutsutaan. */
