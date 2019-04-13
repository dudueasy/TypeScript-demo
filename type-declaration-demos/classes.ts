{
  /* example1  类的定义: 
  static, private, protected 关键字 
  getter, setter
  */
  class User {
    private name: string;
    protected email: string;
    public _age: number;

    // 声明静态成员 (构造函数上的属性)
    static className = 'User';

    static tellClass() {
      return (User.className)
    }

    // 这些函数都是原型的方法
    constructor(name: string, email: string, _age: number) {
      this.name = name
      this.email = email
      this._age = _age
    }

    public tell(): void {
      console.log(this.name + " is " + this.age + " years old")
    }

    // getter setter
    get age() {
      return this._age
    }

    set age(age) {
      if (age > 0) {
        this._age = age
      }
      else {
        throw Error('年龄不能小于0')
      }
    }
  }

  let apolo = new User('apolo', 'xx@11.com', 20)
  console.log("apolo: ", apolo)

  console.log("User: ", User)
  console.log("User.className: ", User.className)
  console.log("User.tellClass(): ", User.tellClass())
  /* example1 ends */


  /* example2  类的继承 */
  class Member extends User {
    public id: number

    constructor(name: string, email: string, age: number, id: number) {
      super(name, email, age)
      this.id = id
    }
  }

  let alex = new Member('alex', 'xx@1.com', 20, 111)

  // 在 constructor 的参数中使用 public 关键字来快捷定义实例上的字段 
  class Person {
    constructor(public name: string, public age: number, public gender: string) {
    }
  }

  let Alex = new Person('Alex', 30, 'male')
  console.log(Alex)
  /* example2 ends */

  /* example3 实现一个接口 */
  interface Animal {
    walk(): void;
    eat(): void;
  }

  class Human implements Animal {
    constructor(public name: string, public age: number) {
    }

    walk(): void {
      console.log('Human is walking')
    }

    eat(): void {
      console.log('Human is eating')
    }
  } 
}