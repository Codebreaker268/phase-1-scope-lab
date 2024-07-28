var customerName="bob";

function upperCaseCustomerName(){
    customerName= customerName.toUpperCase();

};
// upperCaseCustomerName();
function setBestCustomer(){
    bestCustomer="not bob"
};
// setBestCustomer();
function overwriteBestCustomer(){
    bestCustomer="maybe bob"
};
const leastFavoriteCustomer="dan";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer="not dan";
}
changeLeastFavoriteCustomer();
console.log(leastFavoriteCustomer);