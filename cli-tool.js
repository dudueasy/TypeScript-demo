#!/usr/bin/env ts-node
console.log(process.argv);
var a = parseInt(process.argv[2]);
var b = parseInt(process.argv[3]);
if (Number.isNaN(a) || Number.isNaN(b)) {
    throw ('传入的参数必须为数字');
}
console.log("\u8BA1\u7B97\u7684\u7ED3\u679C\u4E3A: " + (a + b));
console.log(1);
