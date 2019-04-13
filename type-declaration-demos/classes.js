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
{
    /* example1  类的定义:
    static, private, protected 关键字
    getter, setter
    */
    var User_1 = /** @class */ (function () {
        // 这些函数都是原型的方法
        function User(name, email, _age) {
            this.name = name;
            this.email = email;
            this._age = _age;
        }
        User.tellClass = function () {
            return (User.className);
        };
        User.prototype.tell = function () {
            console.log(this.name + " is " + this.age + " years old");
        };
        Object.defineProperty(User.prototype, "age", {
            // getter setter
            get: function () {
                return this._age;
            },
            set: function (age) {
                if (age > 0) {
                    this._age = age;
                }
                else {
                    throw Error('年龄不能小于0');
                }
            },
            enumerable: true,
            configurable: true
        });
        // 声明静态成员 (构造函数上的属性)
        User.className = 'User';
        return User;
    }());
    var apolo = new User_1('apolo', 'xx@11.com', 20);
    console.log("apolo: ", apolo);
    console.log("User: ", User_1);
    console.log("User.className: ", User_1.className);
    console.log("User.tellClass(): ", User_1.tellClass());
    /* example1 ends */
    /* example2  类的继承 */
    var Member = /** @class */ (function (_super) {
        __extends(Member, _super);
        function Member(name, email, age, id) {
            var _this = _super.call(this, name, email, age) || this;
            _this.id = id;
            return _this;
        }
        return Member;
    }(User_1));
    var alex = new Member('alex', 'xx@1.com', 20, 111);
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
    var Human = /** @class */ (function () {
        function Human(name, age) {
            this.name = name;
            this.age = age;
        }
        Human.prototype.walk = function () {
            console.log('Human is walking');
        };
        Human.prototype.eat = function () {
            console.log('Human is eating');
        };
        return Human;
    }());
}
//# sourceMappingURL=classes.js.map