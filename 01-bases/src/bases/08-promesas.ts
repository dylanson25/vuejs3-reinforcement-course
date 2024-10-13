console.log("inicio");

new Promise((resolve, reject) => {
  //   console.log("Cuerpo de la promesa");
  setTimeout(() => {
    // resolve("Mi Amigo cumplio");
    reject("Mi amigo no cumplio");
  }, 1000);
})
  .then((message) => console.log(message))
  .catch((err) => console.log(err))
  .finally(() => console.log("Fin de la promesa"));

console.log("fin");
