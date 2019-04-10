#!/usr/bin/env ts-node

console.log(process.argv)

let a: number = parseInt(process.argv[2])
let b: number = parseInt(process.argv[3])

if (Number.isNaN(a) || Number.isNaN(b)) {
  throw ('传入的参数必须为数字')
}

console.log(`计算的结果为: ${a+b}`)
console.log(1)