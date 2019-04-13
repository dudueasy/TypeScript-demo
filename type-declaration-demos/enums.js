{
    var log = console.log.bind(console);
    var Direction = void 0;
    (function (Direction) {
        Direction["up"] = "up";
        Direction["down"] = "down";
        Direction["left"] = "left";
        Direction["right"] = "right";
    })(Direction || (Direction = {}));
    log(Direction.up);
    log(Direction.down);
    log(Direction["left"]);
    log(Direction["right"]);
    // 变量 x 的类型必须是 枚举类型 Direction 中的一个定义
    var x = void 0;
    x = Direction['up'];
    console.log('x: ', x);
}
//# sourceMappingURL=enums.js.map