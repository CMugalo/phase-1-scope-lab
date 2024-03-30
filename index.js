// Write your solution in this file!
var customerName = "bob";

console.log(customerName);

function upperCaseCustomerName() {
  if ((customerName = "bob")) {
    return (customerName = "BOB");
  }
}

customerName();

function setBestCustomer() {
  bestCustomer = "not bob";
  return bestCustomer;
}

bestCustomer();

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
  return bestCustomer;
}

bestCustomer();

const leastFavoriteCustomer = "Samuel";

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = "Samuel";
  leastFavoriteCustomer = "David";
  return leastFavoriteCustomer;
}

changeLeastFavoriteCustomer();
