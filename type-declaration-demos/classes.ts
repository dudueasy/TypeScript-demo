class User{
  public name: string;
  protected email: string;
  public age: number;

  constructor(name: string, email: string, age: number){
    this.name = name
    this.email = email
    this.age = age 
  }

  public register():void{
    console.log(this.name + " is now registered")
  }

  public tell():void{
    console.log(this.name + " is " + this.age + " years old")
  }

  // 这是原型的方法
  payInvoice():void{
    console.log(`${this.name} pay invoice`) }
}

let apolo = new User('apolo', 'xx@11.com', 20)
apolo.payInvoice()


class Member extends User{
  public id: number

  constructor(name: string, email: string, age: number, id: number){
    super(name, email, age)
    this.id = id 
  } 
  
  // 这是原型上的方法
  payInvoice():void{ 
    super.payInvoice()
  }
} 

let alex = new Member('alex','xx@1.com', 20, 111)
alex.payInvoice()



// 在 constructor 的参数中使用 public 关键字来快捷定义实例上的字段

class Person{
  constructor(public name:string, public age:number, public gender:string){
  }
}

let Alex = new Person('Alex', 30, 'male')
console.log(Alex)
