const charater = ["Goki", "Vegetta", "Trunks", "Goten"];

// const [g, v, t, go] = charater
const [, v, t, go] = charater;

// console.log(g)
console.log(v);
console.log(t);
console.log(go);

const returnArray = () => [123, "ABS"] as const;

const [numbers, letters] = returnArray();
console.log(numbers * 2, letters.toLowerCase());
