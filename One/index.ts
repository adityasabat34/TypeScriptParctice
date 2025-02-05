type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: string;
};

let cashInRegister = 100;
let nextOrderId = 1;
const orderHistory: Order[] = [];
let nextPizzaId = 1;

const menu: Pizza[] = [
  { id: nextOrderId++, name: "margherita", price: 200 },
  { id: nextOrderId++, name: "Ciekn", price: 200 },
  { id: nextOrderId++, name: "margha", price: 200 },
  { id: nextOrderId++, name: "mta", price: 200 },
  { id: nextOrderId++, name: "margita", price: 200 },
];

// let orderQueue = [];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizaa: Pizza = {
    id: nextOrderId++,
    ...pizzaObj,
  };
  menu.push(newPizaa);
  return newPizaa;
}

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder = { id: nextOrderId, pizza: selectedPizza, status: "ordered" };
  nextOrderId++;
  orderHistory.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
  const order = orderHistory.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found in the orderQueue`);
    return;
  }
  order.status = "completed";
  return order;
}

addNewPizza({ name: "chicken", price: 300 });

placeOrder("chicken");
completeOrder(4);

console.log(menu);
console.log(cashInRegister);
console.log(orderHistory);

export const getPizzaDetails = (
  identifier: string | number
): Pizza | undefined => {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLocaleLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError("String or Number is allowed");
  }
};

let value: any = 43;
value = "adi";
