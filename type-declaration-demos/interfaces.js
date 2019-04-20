{
    function showTodo(todo) {
        console.log(todo.title + ": " + todo.text);
    }
    var myTodo = {
        title: "Trash",
        text: "Take out trash",
        finish: function () {
            console.log(this.text + ' is finished');
        }
    };
    // myTodo.title = 'shopping'
    // title 已经被申明为只读属性, 不可重新赋值.
    myTodo.text = 'buy some foods';
    showTodo(myTodo);
    myTodo.finish();
    function createRect(config) {
        console.log(config);
    }
    // 通过将字段赋值给变量, 再将变量作为参数传入, 
    // 可以让多余的字段通过 Interface 的类型检查
    var myConfig = {
        length: 100,
        width: 100,
        color: 'red'
    };
    //  这一行代码将会报错
    // createRect({ length: 100, width: 100, color: 'red' })
    createRect(myConfig);
    // 使用 类型断言 的方式也可以让具有多余字段的 接口实现 通过检查
    createRect({ length: 1, color: 'red' });
    var xx = function (whatever, whatever2) {
        return whatever + whatever2;
    };
    console.log(xx(1, 2));
    var multiplication = function (a, b) {
        return a * b;
    };
    console.log(multiplication(22, 2));
    var stringArr = ['1', '2', '3'];
    console.log(stringArr);
    var stringObj = {
        "name": "apolo",
        age: "20"
    };
    console.log(stringObj);
    // 定义一个函数 fn, 返回值实现了上述接口, 
    // fn 函数内部返回一个对象.  
    // 这个对象是一个函数, 具有一个函数属性
    var fn_1 = function () {
        var x = function (a, b) {
            return a + b;
        };
        x.functionProps = function (a, b) {
            return a - b;
        };
        return x;
    };
    // 调用 fn 来获得返回值. 
    // 返回值就是一个实现了  FunctionWithFunctionProps  接口的函数 
    var functionWithProps = fn_1();
    // 简洁写法 (调用一个立即执行函数来返回所需函数 )
    var anotherFunctionWithProps = (function () {
        var x = function (a, b) {
            return a + b;
        };
        x.functionProps = function (a, b) {
            return a - b;
        };
        return x;
    })();
    console.log(anotherFunctionWithProps);
    var frank = {
        name: 'frank',
        age: 20,
        move: function () {
            console.log('I am moving');
        }
    };
    frank.move();
    /* example 6 end */
}
//# sourceMappingURL=interfaces.js.map