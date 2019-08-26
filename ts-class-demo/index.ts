//   name: string
//   gender: string
//   age: number
//   job:string
// }

let apolo = {
  name: 'apolo',
  gender: 'male',
  age: 20,
  job: 'xx'
}

class AnotherPerson {
  public name: string
  public gender: string
  private age: number
  private job: string

  constructor(person) {
    Object.assign(this, person)
  }
}

let yy = new AnotherPerson(apolo)

console.log(yy)
console.log(yy.name)
console.log(yy.gender)

let zz = new Date(Date.now())

{
  const a = "xyz"
  const b = 'bb'

  interface AType {
    [a](hint: "string"): string,
    [b](hint: "number"): number
  }

  const c: AType = { xyz: 'sss', hint: 222 } 
}