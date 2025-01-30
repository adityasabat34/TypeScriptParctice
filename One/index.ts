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
  address: Address;
};
let person1: Person = {
  user: "aditya",
  age: 32,
  isStudent: false,
  address: {
    street: "Chmebuty",
    city: "Mumbai",
    country: "India",
  },
};

let peroson2: Person = {
  user: "sahil",
  age: 21,
  isStudent: true,
  address: {
    street: "Chmebuty",
    city: "Mumbai",
    country: "India",
  },
};

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
