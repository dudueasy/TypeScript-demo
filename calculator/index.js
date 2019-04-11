{
    var Calculator = /** @class */ (function () {
        function Calculator(keys) {
            this.keys = keys;
            this.createContainer();
            this.createOutput();
            this.createRow(this.keys);
            this.bindEvents();
        }
        Calculator.prototype.createContainer = function () {
            this.container = document.createElement('div');
            this.container.classList.add('calculator');
            document.body.appendChild(this.container);
        };
        Calculator.prototype.createOutput = function () {
            this.output = document.createElement('div');
            this.output.classList.add('output');
            var span = document.createElement('span');
            span.textContent = '0';
            this.output.appendChild(span);
            this.container.appendChild(this.output);
        };
        Calculator.prototype.createButton = function (key, rowContainer) {
            var text = key.text, type = key.type;
            var className = "button text-" + text + " " + type;
            var button = document.createElement('button');
            button.textContent = text;
            button.className = className;
            rowContainer.appendChild(button);
        };
        Calculator.prototype.createRow = function (keys) {
            var _this = this;
            keys.map(function (keyList) {
                var row = document.createElement('div');
                row.classList.add('row');
                keyList.forEach(function (key) { return _this.createButton(key, row); });
                _this.container.appendChild(row);
            });
        };
        Calculator.prototype.bindEvents = function () {
            this.container.addEventListener('click', function (e) {
                if (e.target instanceof HTMLButtonElement) {
                    var button = e.target;
                    console.log(button);
                    console.log(button.classList.value);
                    if (button.classList.value.indexOf('number') > -1) {
                        // 如果没有 操作符, 那么拼接数字 firstNumber
                        // 如果有操作符, 那么拼接数字 secondNumber
                    }
                    else if (button.classList.value.indexOf('operator') > -1) {
                        var operator = button.textContent;
                        console.log(operator);
                        switch (operator) {
                            case ("÷"):
                                break;
                            case ("+"):
                                break;
                            case ("-"):
                                break;
                            case ("×"):
                                break;
                            default:
                                return;
                        }
                    }
                    else if (button.classList.value.indexOf('command') > -1) {
                        // 将结果作为 firstNumber
                        // 将操作符清空
                    }
                }
            });
        };
        return Calculator;
    }());
    var keys = [
        [
            { "text": "Clear", type: "command" },
            { "text": "÷", type: "operator" }
        ],
        [
            { "text": "7", type: "number" },
            { "text": "8", type: "number" },
            { "text": "9", type: "number" },
            { "text": "×", type: "operator" }
        ],
        [
            { "text": "4", type: "number" },
            { "text": "5", type: "number" },
            { "text": "6", type: "number" },
            { "text": "-", type: "operator" }
        ],
        [
            { "text": "1", type: "number" },
            { "text": "2", type: "number" },
            { "text": "3", type: "number" },
            { "text": "+", type: "operator" }
        ],
        [
            { "text": "0", type: "number" },
            { "text": ".", type: "number" },
            { "text": "=", type: "command" }
        ]
    ];
    var calculator = new Calculator(keys);
}
