{
  // demo1 类型兼容
  // 如果两个类型的字段名, 类型, 数量完全一样, 那么这两个类型就是兼容的. 互相满足的 
  interface Named {
    name: string;
  }

  class Person {
    name: string;
  }

  let p: Named;
  // OK, because of structural typing
  p = new Person();



  // demo2 间接赋值 以 实现 类型兼容
  // 如果是 定义一个 值a:type 等于某个变量 b, 
  // 那么 ts 会根据 type 上的属性去找 b 中的属性, 看类型是否符合
  // 这时 b 上面即使具备了额外的 字段 , 也仍然能够兼容
  interface Student {
    name: string,
    grade: number
  }


  // 下面这行代码将会报错, 因为 x 的值超出了 interface Student 的规定
  // let x: Student = { name: 'apolo', grade: 6, gender: 'male' }


  // 但是这行代码却可以被 ts 运行,  因为 ts 类型兼容.  
  // 在将 y 赋值给 z 的时候, ts 检查了 y 的成员类型, 发现 Student 兼容 y
  // 于是可以正常编译

  let y = { name: 'apolo', grade: 6, gender: 'male' }
  let z: Student = y

}




