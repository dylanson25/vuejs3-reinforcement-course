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
