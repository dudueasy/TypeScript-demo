{
    // demo1 
    function tell(a) {
        // 断言语法 1:  value as type
        if (a) {
            console.log(a);
        }
        // 断言语法 2:  <type>value 
        else if (a) {
            console.log(a.toString());
        }
    }
    tell([1, 2, 3]);
    tell('this is a string');
    // demo2
    function aa(xx) {
        // 我们断定 xx 是 string 类型, 于是 TypeScript 用 string 作为 xx 的类型.
        console.log(xx.length);
    }
    aa(100);
    aa('11');
}
//# sourceMappingURL=typeAssertion.js.map