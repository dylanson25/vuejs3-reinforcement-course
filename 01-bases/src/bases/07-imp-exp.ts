import heroes, { owners, type Owner, type Hero } from "./heroes";

export const getHeroes = (id: number): Hero | undefined =>
  heroes.find((h) => h.id == id);

console.table(getHeroes(1));

const getHeroesByOwners = (owner: Owner) =>
  heroes.filter((h) => h.owner == owner);

console.table(getHeroesByOwners("DC"));
