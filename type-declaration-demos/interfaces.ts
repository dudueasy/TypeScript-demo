{
  /* example 1 : A Simple Interface for Objects */
  interface Todo {
    readonly title: string,
    text: string,
    description?: string[], // 声明一个可选属性
    finish(text?: string): void// 声明一个函数属性
  }

  function showTodo(todo: Todo): void {
    console.log(todo.title + ": " + todo.text)
  }

  let myTodo: Todo = {
    title: "Trash",
    text: "Take out trash",
    finish() {
      console.log(this.text + ' is finished')
    }
  }

  // myTodo.title = 'shopping'
  // title 已经被申明为只读属性, 不可重新赋值.

  myTodo.text = 'buy some foods'

  showTodo(myTodo)
  myTodo.finish()
  /* example 1 end */


  /* example 2 : Allow Excess Property in Interface Implementation */
  interface RectConfig {
    length: number;
    width?: number
  }

  function createRect(config: RectConfig) {
    console.log(config)
  }

  // 通过将字段赋值给变量, 再将变量作为参数传入, 
  // 可以让多余的字段通过 Interface 的类型检查
  let myConfig = {
    length: 100,
    width: 100,
    color: 'red'
  }

  //  这一行代码将会报错
  // createRect({ length: 100, width: 100, color: 'red' })

  createRect(myConfig)

  // 使用 类型断言 的方式也可以让具有多余字段的 接口实现 通过检查
  createRect({ length: 1, color: 'red' } as RectConfig)
  /* example 2 end */


  /* example 3 */
  // declare a function interface
  interface Add {
    (a: number, b: number): number;
  }

  let xx: Add = function (whatever: number, whatever2: number): number {
    return whatever + whatever2
  }

  console.log(xx(1, 2))


  interface MultiInterface {
    (firstNumber: number, factor: number): number
  }

  const multiplication: MultiInterface = function (a: number, b: number): number {
    return a * b
  }

  console.log(multiplication(22, 2))
  /* example 3 end */


  /* Example4 Indexable Types */
  interface StringArray {
    [whatever: number]: string
  }

  let stringArr: StringArray = ['1', '2', '3']
  console.log(stringArr)

  interface StringObject {
    [whatever: string]: string;
  }

  let stringObj: StringObject = {
    "name": "apolo",
    age: "20"
  }

  console.log(stringObj)
  /* example 4 end */



  /* Example 5  给函数定义一个函数属性 */
  interface FunctionWithFunctionProps {
    (a: number, b: number): number; // 定义函数的参数和返回值
    functionProps(a: number, b: number): any; // 定义函数的函数属性
  }

  // 定义一个函数 fn, 返回值实现了上述接口, 
  // fn 函数内部返回一个对象.  
  // 这个对象是一个函数, 具有一个函数属性
  let fn = function (): FunctionWithFunctionProps {
    let x: any = function (a: number, b: number): any {
      return a + b
    }

    x.functionProps = (a: number, b: number) => {
      return a - b
    }

    return x
  }

  // 调用 fn 来获得返回值. 
  // 返回值就是一个实现了  FunctionWithFunctionProps  接口的函数 
  let functionWithProps = fn()

  // 简洁写法 (调用一个立即执行函数来返回所需函数 )

  let anotherFunctionWithProps = (
     (): FunctionWithFunctionProps => {  // 用一个匿名函数
      let x: any = function (a: number, b: number): any {
        return a + b
      }

      x.functionProps = (a: number, b: number) => {
        return a - b
      }

      return x
    }
  )()

  console.log(anotherFunctionWithProps)
  /* example 5 end */


  /* example 6 接口继承 */
  interface Animal{
    move():void; 
  }

  // Human 继承了 Animal 接口
  interface Human extends Animal{
    name: string;
    age: number;
  }

  let frank:Human = {
    name: 'frank',
    age: 20,
    move(){
      console.log('I am moving')
    }
  }

  frank.move()


  /* example 6 end */


}