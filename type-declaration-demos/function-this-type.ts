{
  interface Human {
    name: string
  }

  function fn(this: Human) {
    console.log(this)
  }

  fn.call({ name: 'apolo' })
  fn.call('11') // 仍然可以通过检查

  // 以下函数调用方式将会报错
  // fn()  
} 