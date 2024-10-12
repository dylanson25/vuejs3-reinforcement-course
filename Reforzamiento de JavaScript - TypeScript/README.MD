# Temas puntuales de la sección

Esta es una sección de reforzamiento en JavaScript y TypeScript, la cual es necesaria para no sentir la curva de aprendizaje de Vue.js complicada.

1. Constantes, let y var
2. Template literals
3. Objetos
4. Arreglos
5. Funciones
6. Funciones de flecha
7. Desestructuración de objetos y arreglos
8. Importaciones y exportaciones
9. Promesas
10. Argumentos a promesas
11. Valor y referencia
12. Async y Await
13. Peticiones HTTP
14. Ternarios
15. Null check
16. TypeScript

## Notas

### `structuredClone`

Crean un clone del objeto el cual puede ser modificado sin afectar el objeto original.

Anteriormente esto se podia hacer mediante el operador spread pero se tenia que tener cuidado si el objeto tenia mas objetos anidados puesto que estos se pasan por referencia

```js
const person = {
  lastName: "Villarreal",
  age: 23,
  address: {
    city: "Yakima",
    zip: 12345,
    lat: 14.23232,
    lng: 34.5667,
  },
};

const person2 = structuredClone(person);

person2.lastName = "Parker";
person2.address.city = "LA";
```

### `as const`

Elimina los metodos de mutacion de los objetos

```js
const numberArray = [1, 2, 3, 4, 5] as const;
```
