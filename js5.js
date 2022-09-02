//loops and stuff
const todos=[
    {
        id: 1,
        text: 'Study code',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with the boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appt',
        isCompleted: false
    }
]
console.log(todos[1].text)
const todoJSON=JSON.stringify(todos)
console.log(todoJSON)

/*for(i=0;i<5;i++){
    console.log('The number is '+i)
}
let j=1
while(j<5){
    console.log('While number is '+j)
    j++
}
*/
for(let todo of todos){
    console.log(todo)
}
//forEach,map,filter
todos.forEach(function(todo){
    console.log(todo.text)
})
const todoText=todos.map(function(todo){
    return todo.text//array döndürür.
})
console.log(todoText)

const todoCompleted=todos.filter(function(todo){
    return todo.isCompleted===true
})
console.log(todoCompleted)

const todoCompleted2=todos.filter(function(todo){
    return todo.isCompleted===true
}).map(function(todo){
    return todo.text
})
console.log(todoCompleted2)


