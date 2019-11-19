export interface Person {
  name: string
  age: number
}

function a(p: Person): void{
  console.log(p)
}

export default a
