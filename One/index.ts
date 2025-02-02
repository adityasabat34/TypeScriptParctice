type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: string;
};

const menu = [
  { name: "margherita", price: 200 },
  { name: "Ciekn", price: 200 },
  { name: "margha", price: 200 },
  { name: "mta", price: 200 },
  { name: "margita", price: 200 },
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

placeOrder("chiken");
completeOrder(1);

console.log(menu);
console.log(cashInRegister);
console.log(orderHistory);
