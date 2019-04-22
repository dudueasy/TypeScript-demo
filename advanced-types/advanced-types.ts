{
    /* demo1 交叉类型 intersection types */
    interface Child {
        name: string,
        age: number
    }

    interface Student {
        grade: number,
        class: number
    }

    // 小学生是一个交叉类型 ,
    type PrimarySchoolStudent = Readonly<Child> & Student

    // 儿童游戏玩家是一个交叉类型
    type ChildrenGamer = Child & { gameList: string[] }

    let apolo: PrimarySchoolStudent = {
        name: 'apolo',
        age: 10,
        grade: 3,
        class: 2
    }

    /*
      对  Child 类型的字段进行的修改都会被禁止.
      因为 PrimarySchoolStudent 规定的字段中,
      来自 <Child> 的字段都是只读的
    */
    // apolo.age = 11

    let apolo2: ChildrenGamer = {
        name: 'apolo',
        age: 10,
        gameList: ['WOW']
    }

    console.log(apolo.name)
    console.log(apolo2.gameList)
}
{
    /* demo2
     类型保护与区分类型（Type Guards and Differentiating Types）
    */
    interface Boy {
        name: string;
        isMale: true;
    }

    interface Girl {
        name: string;
        isFemale: true;
    }

    // 联合类型
    type Child = Boy | Girl

    // 由于使用了 类和类型
    // 我们只能通过 使用类型断言 去得以调用某一个类型的属性.
    function tellGender(child: Child): string {
        if ((child as Boy).isMale) {
            // if ((<Boy>child).isMale) {
            return 'Male'
        }
        if ((child as Girl).isFemale) {
            return 'Female'
        }
    }

    let alex: Child = {name: 'alex', isMale: true}
    let alexa: Child = {name: 'alexa', isFemale: true}

    console.log(tellGender(alex))
    console.log(tellGender(alexa))

    // 类型保护
    // 相当于把对 类型断言 进行的判断提取出来
    function isBoy(child: Boy | Girl): child is Boy {
        return (<Boy>child).isMale !== undefined
    }

    function anotherTellGender(child: Child): "Male" | "Female" {
        // 应用类型保护
        if (isBoy(child)) {

            // 在这里 ts 将会允许我们访问 Boy 类型的成员
            console.log(child.isMale)
            return "Male"
        } else {
            console.log(child.isFemale)
            return "Female"
        }
    }

    console.log(anotherTellGender(alexa))
    console.log(anotherTellGender(alex))
}
{
    /* Demo3 typeof 类型保护 */

    function lengthOrValue(a: string | number): number {
        if (typeof a === 'string') {
            return (a.length)
        } else if (typeof a === 'number') {
            return Number(a.toFixed(2))
        }
    }


    console.log(lengthOrValue('111111'))
    console.log(lengthOrValue(999))
}
{
    /*  demo4 字符串字面量类型 和  数字字面量类型 */
    // 就是几个字符串值的联合类型.
    // 值只能为定义中的某一个

    type Direction = "up" | "down" | "left" | "right"

    let xx: Direction = "up"

    // 就是几个数字值的联合类型.
    type Grade = 1 | 2 | 3 | 4 | 5 | 6

    let yy: Grade = 2

}

{
    /* demo5 可辨识联合 */

    // 可辨识联合是一组具有相同字段, 但是字段值各不相同的类型的联合.

    interface Square {
        kind: "square";
        size: number;
    }

    interface Rectangle {
        kind: "rectangle";
        width: number;
        height: number;
    }

    interface Circle {
        kind: "circle";
        radius: number;
    }


    type Shape = Square | Rectangle | Circle;


    function area(s: Shape): number {
        switch (s.kind) {
            // 在这里根据 s.kind 的值不同, ts 就得知我们要操作的对象类型
            // 从而允许我们直接去调用特定类型上的特定字段
            case "square":
                return s.size * s.size;
            case "rectangle":
                return s.height * s.width;
            case "circle":
                return Math.PI * s.radius ** 2;
        }
    }


    // 启用 辨识条件完整性检查:
    // 方法1: 定义函数返回值类型, 并且使用 strictNullChecks 选项.

    // 方法2: 定义一个报警器 assertNever, 用来捕获未被 switch case 覆盖的情况
    // assertNever 永远不应该被执行, 一旦执行就表示我们的代码存在漏洞
    function assertNever(x: never): never {
        throw new Error("Unexpected object: " + x);
    }

    function anotherArea(s: Shape) {
        switch (s.kind) {
            case "square":
                return s.size * s.size;
            case "rectangle":
                return s.height * s.width;
            case "circle":
                return Math.PI * s.radius ** 2;
            default:
                // 这个报警器将会保证我们覆盖了所有的情况
                return assertNever(s);
        }
    }


}

{
    /* 类型别名 type 和 接口 interface */

    interface Child {
        name: string,
        age: number
    }

    type Pupil = {
        name: string,
        age: number
    }


    let Alex: Child = {name: 'Alex', age: 10}
    let Alexa: Pupil = {name: 'Alex', age: 10}

    console.log(Alex)
    console.log(Alexa)

}
