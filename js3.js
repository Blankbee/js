//String manipulation and arrays
/*const s='Hello World'
const a='cars, technology, sun'
console.log(s.toUpperCase())
console.log(s.substring(0,5))
console.log(a.split(', '))
*/
const fruits=['apple','strawberry','orange', 1,true]
fruits[5]='mango'
fruits.push('pineapple')
fruits.pop()
fruits.unshift('peach')
console.log(fruits)
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('orange'))