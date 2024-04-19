const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        if (typeof value !== 'string'){
            throw new Error('Value is not a String');
        }

        const parts = value.split(' ')
        if (parts.length !== 2){
            throw new Error('Enter first and last name')
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

// getters => to acess properties
// setters => change (mutate) then
try {
    console.log(person.fullName = 'null scA')
}
catch (e) {
    alert(e);
}
