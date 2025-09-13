var customerName="bob";
function upperCaseCustomerName(){
    return customerName.toUpperCase()
}


function setBestCustomer(){
    var bestCustomer="not bob";
  return bestCustomer
}


function overwriteBestCustomer(){
  return bestCustomer='maybe bob'
}
const leastFavoriteCustomer="Mercy"
function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer="June"
}
console.log(upperCaseCustomerName())
console.log(setBestCustomer())
console.log(overwriteBestCustomer())
console.log(leastFavoriteCustomer())