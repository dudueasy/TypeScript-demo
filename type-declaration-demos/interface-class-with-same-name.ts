// 为什么会有同名的 interface / class
{
  /* demo1 同名的接口定义将会合并 */
  interface Foo {
    x: number
  }
  interface Foo {
    y: string
  }

  // 等同于
  // interface Foo {
  //   x: number;
  //   y: string
  // } 

  // 所以这个声明是 ok 的.
  let g: Foo = { x: 1, y: '2' }
}

{
  /* demo2: 类 */
  // 声明 类 等于声明一个 interface 和一个 构造函数
  interface Foo {
    readonly x: number;
  }

  class Foo {
    readonly x: number = 3;
    y: string
  }

  let xx: Foo = { x: 3, y: 'hi' }

  // Foo 仍然可以当做普通的 类 来使用
  class Whatever extends Foo{ 
  }

}


