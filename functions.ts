function getSum(x: number, y: number): number {
  return x + y
}


console.log(getSum(1, 4))

function getName(firstName: string, lastname?: string): string {
  return lastname ? (firstName + lastname) :  firstName
}

console.log(getName('apolo'))


function returnVoid():void{
  return;
}