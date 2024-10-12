// function greetPerson(name: string) {
//   return `Hola, ${name}`;
// }

// const greetPerson = (name: string) => {
//   return `Hola, ${name}`;
// };

const greetPerson = (name: string) => `Hola, ${name}`;

const getUser = (uid: string) => ({
  uid,
  username: "Tony001",
});

console.log(greetPerson("Dylan"));
console.log(getUser("XYZ-657"));

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 1,
    name: "Superman",
    power: "Super Fuerza",
  },
];

const hero = heroes.find((h) => h.id == 1);

console.log(hero?.name);
console.log(hero?.power?.toUpperCase());
