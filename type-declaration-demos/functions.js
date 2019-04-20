var _this = this;
{
    /* Example1 Basic Function Demo*/
    function getSum(x, y) {
        if (x + y > 0)
            return x + y;
        else {
            return NaN;
        }
    }
    console.log(getSum(1, -2));
    function getName(firstName, lastname) {
        return lastname ? (firstName + lastname) : firstName;
    }
    console.log(getName('apolo'));
    function returnVoid() {
        console.log(arguments);
        return;
    }
    // returnVoid(1, 2, 3, 4)
    // 这样会报错, 因为函数定义中没有参数, 
    //  所以传入参数是不被允许的
    // 这样不会报错. 因为 ts 不会对 .call()  的参数进行检查
    returnVoid.call('whatever', 1, 2, 3, 4);
    /* Example1 end */
    /* Example2 arrow Function Demo*/
    var fn_1 = function (a, b) {
        // console.log(arguments) 
        // 在 JS 中,  箭头函数中是不存在 arguments 的
        // this 由调用方式决定
        console.log(_this);
        return a + b;
    };
    fn_1(10, 20);
    function anotherFn() {
        var _this = this;
        var xx = function () {
            // console.log(arguments)
            // 在 TypeScript 箭头函数中访问 arguments  是不被允许的
            // this 由函数调用方式决定
            console.log(_this);
        };
        xx();
    }
    anotherFn();
}
//# sourceMappingURL=functions.js.map