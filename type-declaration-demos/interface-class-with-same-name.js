var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 为什么会有同名的 interface / class
{
    // 等同于
    // interface Foo {
    //   x: number;
    //   y: string
    // } 
    // 所以这个声明是 ok 的.
    var g = { x: 1, y: '2' };
}
{
    var Foo = /** @class */ (function () {
        function Foo() {
            this.x = 3;
        }
        return Foo;
    }());
    var xx = { x: 3, y: 'hi' };
    // Foo 仍然可以当做普通的 类 来使用
    var Whatever = /** @class */ (function (_super) {
        __extends(Whatever, _super);
        function Whatever() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Whatever;
    }(Foo));
}
//# sourceMappingURL=interface-class-with-same-name.js.map