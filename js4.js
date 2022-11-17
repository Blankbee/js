//Object Literals
const person={
    firstName: 'Saul',
    lastName: 'Goodman',
    age: 35,
    job: 'lawyer',
    clients: ['Heisenberg', 'Fring', 'Ehrmantraut'],
    address: {
        street: '50 main st',
        city: 'Albuquerque',
        state: 'New Mexico'
    }
}
console.log(person)
console.log(person.firstName,person.job)
console.log(person.address.city)
const {firstName,lastName,address:{city}}=person
console.log(city)
person.email='saulgoodman@gmail.com'
