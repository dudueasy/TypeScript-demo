// 声明 ts 中的主要类型
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// 表示 strArr 是由 字符串 组成的数组
let strArr: Array<string>

// equals to the line below
// let strArr: string[];


let unusable: void = undefined;

let u: undefined = undefined;

let n: null = null;

// 声明枚举类型
enum XXX { Value1, Value2, Value3 }

enum YYY {Value1 = 1, Value2 = 3, Value3 = 0}

let myTuple: [string, number]
myTuple = ['xyz', 11,]

console.log(myTuple)
