{
  // demo1 
  function tell(a: string | Array<any>): void {

    // 断言语法 1:  value as type
    if (a as string) {
      console.log(a)
    }

    // 断言语法 2:  <type>value 
    else if (<Array<any>>a) {
      console.log(a.toString())
    }
  }

  tell([1, 2, 3])
  tell('this is a string')



  // demo2

  function aa(xx: number | string): void {
    // 我们断定 xx 是 string 类型, 于是 TypeScript 用 string 作为 xx 的类型.
    console.log((<string>xx).length)
  }

  aa(100)
  aa('11')
}
