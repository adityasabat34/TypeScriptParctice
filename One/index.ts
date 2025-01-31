let uame: string = "adi";
let numberofSame: number = 33;

let isTrue: boolean = true;

////////////////////////////////////////////////////////

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  user: string;
  age: number;
  isStudent: boolean;
};
let person1: Person = {
  user: "aditya",
  age: 32,
  isStudent: false,
};

let peroson2: Person = {
  user: "sahil",
  age: 21,
  isStudent: true,
};

// let people: Person[{}] = [
//   {
//     person1: {
//       user: "Aditya",
//       age: 43,
//       isStudent: true,
//     },
//   },
//   {
//     person3: {
//       user: "Aditi",
//       age: 23,
//       isStudent: true,
//     },
//   },
// ];

let people: Array<Person> = [person1, peroson2];

//////////////////////////////////////////////////////////////////////////
type PizzaDataType = {
  name: string;
  price: number;
};

let menu: PizzaDataType[] = [
  {
    name: "Maghaerita",
    price: 200,
  },
];

type Order = {
  id: number;
  pizza: PizzaDataType;
  status: boolean;
};

let count: number[] = [23, 3];
