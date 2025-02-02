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

const menu: Pizza[] = [
  { id: 1, name: "margherita", price: 200 },
  { id: 2, name: "Ciekn", price: 200 },
  { id: 3, name: "margha", price: 200 },
  { id: 4, name: "mta", price: 200 },
  { id: 5, name: "margita", price: 200 },
];

// let orderQueue = [];

let cashInRegister = 100;
let nextOrderId = 1;
const orderHistory: Order[] = [];

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
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

function completeOrder(orderId: number) {
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

const getPizzaDetails = (identifier: string | number) => {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLocaleLowerCase() === identifier.toLowerCase()
    );
  } else {
    return menu.find((pizza) => pizza.id === identifier);
  }
};
