// function showTodo(todo:{title: string, text: string}):void{
//   console.log(todo.title + ": " + todo.text)
// }

// let myTodo = {title: "Trash", text: "Take out trash"}

// showTodo(myTodo)

interface Todo {
  title: string,
  text: string
}

function showTodo(todo: Todo): void { 
  console.log(todo.title + ": " + todo.text)
}

let myTodo = { title: "Trash", text: "Take out trash" }

showTodo(myTodo)

