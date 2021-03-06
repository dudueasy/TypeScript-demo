{
    /* demo1 泛型函数, 类型变量 <T>  */
    var log = console.log.bind(console);
    // 创建一个函数,  这个函数的返回值类型需要和输入值类型 一致
    // 错误示范 
    // function returnSameType(a: any): any {
    //   return 'xx'
    // } 
    // log(returnSameType(1)) 
    // 正确示范: 使用类型变量 T 声明一个泛型函数
    function returnSameType(a) {
        console.log(typeof a);
        return a;
    }
    // 泛型的使用方法: 
    // 方法1: 调用泛型时声明 类型变量 是一个字符串
    returnSameType('11');
    // 方法2: 让 TypeScript 解释器自行根据输入参数的类型来获知 类型变量.
    returnSameType(222);
    /* demo1 end */
    /* demo2 类型变量 <T> 的使用*/
    //  声明一个函数, 接收的参数为一个数组, 数组中的 item 为 类型 T
    function loggingIdentity(arg) {
        console.log(arg.length); // Array has a .length, so no more error
        return arg;
    }
    loggingIdentity([1, 2, 3]);
    loggingIdentity(['a', 'b', 'c']);
    /* demo2 end */
    /* demo3 泛型函数接口 */
    // 定义函数的类型
    var yyy = void 0;
    yyy = function (arg) {
        return arg;
    };
    // 定义一个符合泛型函数接口的函数
    var addNumber = void 0;
    addNumber = function (aa, bb) {
        return (aa + bb);
    };
    console.log(addNumber(10, 20));
    // 通过 extends 表示泛型变量 遵从泛型约束
    function tellLength(param) {
        console.log(param.length);
        return param;
    }
    /* demo4 ends */
    /* demo5 在泛型中使用类 */
    // 表示函数接收一个参数 是 c , c 是一个类, c 的实例符合 T 类型.
    // 函数返回值也符合 泛型变量 T 的类型.
    // 表示泛型函数 create 的参数的类型必须和 返回值的类型一致
    //  是同一个类.
    function create(c) {
        return new c();
    }
    var Human = /** @class */ (function () {
        function Human() {
        }
        return Human;
    }());
    var s = create(Human);
    /* demo5 ends */
}
//# sourceMappingURL=generics.js.map