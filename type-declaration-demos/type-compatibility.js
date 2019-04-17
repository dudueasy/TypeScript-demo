{
    var Person = /** @class */ (function () {
        function Person() {
        }
        return Person;
    }());
    var p = void 0;
    // OK, because of structural typing
    p = new Person();
    // 下面这行代码将会报错, 因为 x 的值超出了 interface Student 的规定
    // let x: Student = { name: 'apolo', grade: 6, gender: 'male' }
    // 但是这行代码却可以被 ts 运行,  因为 ts 类型兼容.  
    // 在将 y 赋值给 z 的时候, ts 检查了 y 的成员类型, 发现 Student 兼容 y
    // 于是可以正常编译
    var y = { name: 'apolo', grade: 6, gender: 'male' };
    var z = y;
}
//# sourceMappingURL=type-compatibility.js.map