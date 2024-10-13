interface Person {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

export const person: Person = {
  name: "dylan",
  age: 23,
  codeName: "Dylanosn25",
};

// const { name, age, power = "No tiene Poder" } = person;
// console.log(name, age, power);

interface CreateHero {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

const createHero = ({ name, age, codeName, power }: CreateHero) => ({
  id: 1341,
  name,
  age,
  codeName,
  power: power ?? "No tiene poder",
});

const hero1 = createHero(person);
console.table(hero1);
