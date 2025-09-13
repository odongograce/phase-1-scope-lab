var customerName="bob";
function upperCaseCustomerName(){
    return customerName.toUpperCase()
}

var bestCustomer="not bob";
function setBestCustomer(){    
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