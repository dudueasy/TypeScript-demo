/* demo1 Generic Types */
{
  // 定义泛型函数
  function returnSameTypes<T>(a: T): T {
    console.log(`type of argument is ${typeof a}`)
    return a
  }

  returnSameTypes(111)
  returnSameTypes('whatever')

  // 定义一个满足泛型函数类型的函数
  let anotherGenericFunction: <T>(a: T) => T = returnSameTypes

  // 使用对象记法创建函数
  let yetAnotherGenericFunction: { <T>(a: T): T } = returnSameTypes
}


/* demo2 Generic Interface & Generic Types Constraint */
{
  interface Todo {
    id: number
    text: string,
    finished: boolean,
  }

  // 定义一个 应用了 泛型约束 的泛型函数
  function showFinishedTodo<T extends Todo>(todoList: T[]): T[] {
    return todoList.filter(todo => (todo.finished === true))
  }

  let todolist: Todo[] = [
    { id: 1, text: 'sleep before 12pm', finished: false },
    { id: 2, text: 'do homework', finished: true },
    { id: 3, text: 'do exercise', finished: true },
  ]

  console.log(showFinishedTodo(todolist))
}


/* demo3 Generic Class */
{

  // 定义一个泛型类
  class Todo<T>{
    constructor(
      public content: T,
      public id: number,
      public finished: boolean = false
    ) {

    }
  }

  let todoList: Todo<string>[] = [
    new Todo('washing dishes', 1),
    new Todo('doing laundry', 2),
    new Todo('21 sets', 3, true),
  ]

  console.log(todoList)

  // 定义一个接口, 作为泛型类的泛型参数
  interface TodoContent {
    category: string,
    text: string
  }

  let anotherTodoList: Todo<TodoContent>[] = [
    new Todo({ category: 'house work', text: 'doing laundry' }, 1),
    new Todo({ category: 'job', text: 'get shit done' }, 2),
    new Todo({ category: 'sport', text: '5km running' }, 3, true),
  ]

  console.log(anotherTodoList)
}
