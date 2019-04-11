{
    var Calculator = /** @class */ (function () {
        function Calculator(keys) {
            this.keys = keys;
            this.firstNumber = 0;
            this.hasDecimalDot = false;
            this.maxLength = 10;
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
            var outputContainer = document.createElement('div');
            outputContainer.classList.add('output');
            this.output = document.createElement('span');
            this.output.textContent = String(this.firstNumber);
            outputContainer.appendChild(this.output);
            this.container.appendChild(outputContainer);
        };
        Calculator.prototype.updateOutput = function () {
            if (!this.operator) {
                this.output.textContent = String(this.firstNumber);
            }
            else if (this.secondNumber) {
                this.output.textContent = String(this.secondNumber);
            }
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
        Calculator.prototype.calculate = function () {
            this.secondNumber = this.secondNumber || 0;
            switch (this.operator) {
                case ("÷"):
                    if (this.secondNumber !== 0) {
                        this.firstNumber = this.firstNumber / this.secondNumber;
                    }
                    else {
                        this.firstNumber = NaN;
                    }
                    break;
                case ("+"):
                    this.firstNumber = this.firstNumber + this.secondNumber;
                    break;
                case ("-"):
                    this.firstNumber = this.firstNumber - this.secondNumber;
                    break;
                case ("×"):
                    this.firstNumber = this.firstNumber * this.secondNumber;
                    break;
                default:
                    return;
            }
            this.secondNumber = null;
            this.operator = null;
            this.updateOutput();
        };
        Calculator.prototype.bindEvents = function () {
            var _this = this;
            this.container.addEventListener('click', function (e) {
                if (e.target instanceof HTMLButtonElement) {
                    var button = e.target;
                    console.log(button);
                    console.log(button.classList.value);
                    var clickedValue = void 0;
                    // 如果用户点击的是数字
                    if (button.classList.value.indexOf('number') > -1) {
                        if (button.textContent) {
                            clickedValue = button.textContent;
                            console.log(" clickedValue: ", clickedValue);
                        }
                        // 如果没有 操作符, 那么拼接数字 firstNumber
                        if (!_this.operator) {
                            console.log(String(_this.firstNumber).indexOf('.'));
                            if (clickedValue === '.' && String(_this.firstNumber).indexOf('.') < 0) {
                                _this.hasDecimalDot = true;
                            }
                            else if (clickedValue !== '.') {
                                if (_this.hasDecimalDot) {
                                    _this.firstNumber = Number(String(_this.firstNumber) + '.' + clickedValue);
                                    _this.hasDecimalDot = false;
                                }
                                else {
                                    _this.firstNumber = Number(String(_this.firstNumber) + clickedValue);
                                }
                            }
                            console.log(_this.firstNumber);
                        }
                        // 如果有操作符, 那么拼接数字 secondNumber
                        else {
                            _this.secondNumber = _this.secondNumber || 0;
                            console.log(String(_this.secondNumber).indexOf('.'));
                            if (clickedValue === '.' && String(_this.secondNumber).indexOf('.') < 0) {
                                _this.hasDecimalDot = true;
                            }
                            else if (clickedValue !== '.') {
                                if (_this.hasDecimalDot) {
                                    _this.secondNumber = Number(String(_this.secondNumber) + '.' + clickedValue);
                                    _this.hasDecimalDot = false;
                                }
                                else {
                                    _this.secondNumber = Number(String(_this.secondNumber) + clickedValue);
                                }
                            }
                            console.log("second:", _this.secondNumber);
                        }
                    }
                    // 如果点击的是操作符
                    else if (button.classList.value.indexOf('operator') > -1) {
                        var operator = button.textContent;
                        if (_this.operator) {
                            _this.calculate();
                        }
                        _this.operator = operator;
                    }
                    // 如果点击的是命令
                    else if (button.classList.value.indexOf('command') > -1) {
                        var command = button.textContent;
                        //  = 将结果作为 firstNumber
                        if (command === '=') {
                            _this.calculate();
                        }
                        if (command === 'Clear') {
                            _this.firstNumber = 0;
                            _this.secondNumber = null;
                            _this.operator = null;
                        }
                    }
                    _this.updateOutput();
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
