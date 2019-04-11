{
    // 定义计算器整体容器
    var contanier_1 = document.createElement('div');
    contanier_1.classList.add('calculator');
    document.body.appendChild(contanier_1);
    // 定义计算输出容器
    var output = document.createElement('div');
    output.classList.add('output');
    var span = document.createElement('span');
    span.textContent = '0';
    output.appendChild(span);
    contanier_1.appendChild(output);
    var keys = [
        // let keys: Key[] = [
        ['Clear', '÷'],
        ['7', '8', '9', '✖',],
        ['4', '5', '6', '-',],
        ['1', '2', '3', '+',],
        ['0', '.', '=',],
    ];
    function createButton(text, rowContainer, className) {
        if (className === void 0) { className = ''; }
        var button = document.createElement('button');
        button.textContent = text;
        button.className = className;
        rowContainer.appendChild(button);
    }
    function createRow(keyList) {
        var row = document.createElement('div');
        row.classList.add('row');
        keyList.forEach(function (key) { return createButton(key, row, "button text-" + key); });
        contanier_1.appendChild(row);
    }
    keys.map(function (keyList) { return createRow(keyList); });
}
