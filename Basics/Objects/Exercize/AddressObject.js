
function Address(street, city, zipCode){
    this.street = street
    this.city = city
    this.zipCode = zipCode

    this.showAddress = function(){
        console.log(`${street} ${city} ${zipCode}`)
    }
}

// factory function

function createAdress(street, zipcode, city){
    return {
        street,
        city,
        zipCode
    };
}

function areEqual(address1,address2){
    return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
}

function areSame(address1, address2){
    return address1 === address2
}