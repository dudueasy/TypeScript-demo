/* demo1 Generic Types */
{
    // 定义泛型函数
    function returnSameType(a) {
        console.log("type of argument is " + typeof a);
        return a;
    }
    returnSameType(111);
    returnSameType('whatever');
    // 定义一个满足泛型函数类型的函数
    var anotherGenericFunction = returnSameType;
    // 使用对象记法创建函数
    var yetAnotherGenericFunction = returnSameType;
}
/* demo2 Generic Interface & Generic Types Constraint */
{
    // 定义一个 应用了 泛型约束 的泛型函数
    function showFinishedTodo(todoList) {
        return todoList.filter(function (todo) { return (todo.finished === true); });
    }
    var todolist = [
        { id: 1, text: 'sleep before 12pm', finished: false },
        { id: 2, text: 'do homework', finished: true },
        { id: 3, text: 'do exercise', finished: true },
    ];
    console.log(showFinishedTodo(todolist));
}
/* demo3 Generic Class */
{
    // 定义一个泛型类
    var Todo = /** @class */ (function () {
        function Todo(content, id, finished) {
            if (finished === void 0) { finished = false; }
            this.content = content;
            this.id = id;
            this.finished = finished;
        }
        return Todo;
    }());
    var todoList = [
        new Todo('washing dishes', 1),
        new Todo('doing laundry', 2),
        new Todo('21 sets', 3, true),
    ];
    console.log(todoList);
    var anotherTodoList = [
        new Todo({ category: 'house work', text: 'doing laundry' }, 1),
        new Todo({ category: 'job', text: 'get shit done' }, 2),
        new Todo({ category: 'sport', text: '5km running' }, 3, true),
    ];
    console.log(anotherTodoList);
}
//# sourceMappingURL=generics-demo.js.map