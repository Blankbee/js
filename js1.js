//alert("Hello World")
console.log("Hello")//console.warn, .error
let age=30
age=31
const height=175
//height=180 yapılamaz.
//== işareti sadece içeriği === işareti hem içeriği hem tipi kontrol eder.
const x=11
const color= x > 10 ? 'red' : 'blue'
console.log(color)

switch(color){
    case 'red':
        console.log('color is red')
        break
    case 'blue':
        console.log('color is blue')
        break
    default:
        console.log('color is nor red nor blue')
        break
}
