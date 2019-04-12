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
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is now registered");
    };
    User.prototype.tell = function () {
        console.log(this.name + " is " + this.age + " years old");
    };
    // 这是原型的方法
    User.prototype.payInvoice = function () {
        console.log(this.name + " pay invoice");
    };
    return User;
}());
var apolo = new User('apolo', 'xx@11.com', 20);
apolo.payInvoice();
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(name, email, age, id) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    // 这是原型上的方法
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var alex = new Member('alex', 'xx@1.com', 20, 111);
alex.payInvoice();
// 在 constructor 的参数中使用 public 关键字来快捷定义实例上的字段
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Person;
}());
var Alex = new Person('Alex', 30, 'male');
console.log(Alex);
