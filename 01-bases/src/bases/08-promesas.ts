// console.log("inicio");

import { getHeroes } from "./07-imp-exp";
import { Hero } from "./heroes";

// new Promise((resolve, reject) => {
//   //   console.log("Cuerpo de la promesa");
//   setTimeout(() => {
//     // resolve("Mi Amigo cumplio");
//     reject("Mi amigo no cumplio");
//   }, 1000);
// })
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Fin de la promesa"));

// console.log("fin");

const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroes(id);
      hero ? resolve(hero) : reject("No existe");
    }, 1500);
  });
};

getHeroByIdAsync(2)
  .then((hero) => console.log(hero.name))
  .catch((message) => console.log(message));
