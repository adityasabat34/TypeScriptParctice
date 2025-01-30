const menu = [
  { name: "sahil", income: 20 },
  { name: "Aditya", income: 20 },
  { name: "Zensaar", income: 20 },
  { name: "Soham", income: 20 },
  { name: "Dev", income: 20 },
];

const cashInRegister = 100;
const listQueue = [];

function addNewUser(user) {
  menu.push(user);
}
function placeOrder(username) {
  const selectedPizza = menu.find((user) => user.name === username);
  cashInRegister += selectedPizza.income;
  const newOrder = { pizza: selectedPizza, status: "ordered" };
  listQueue.push(newOrder);
  return newOrder;
}

function completeOrder(id) {
  const selectedPizza = listQueue.find((pizzaIndex) => pizzaIndex.id === id);
}
