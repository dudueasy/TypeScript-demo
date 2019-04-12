{
  interface Key {
    text: string,
    type: string
  }

  class Calculator {
    public container: HTMLDivElement;
    public output: HTMLSpanElement;
    public firstNumber: string = '0';
    public secondNumber: string | null;
    public hasDecimalDot: boolean = false;
    public operator: string | null;
    public maxLength: number = 10;

    constructor(public keys: Array<Array<Key>>) {
      this.createContainer()
      this.createOutput()
      this.createRow(this.keys)
      this.bindEvents()
    }

    createContainer() {
      this.container = document.createElement('div')
      this.container.classList.add('calculator')
      document.body.appendChild(this.container)
    }

    createOutput() {
      let outputContainer = document.createElement('div')
      outputContainer.classList.add('output')

      this.output = document.createElement('span')
      this.output.textContent = String(this.firstNumber)
      outputContainer.appendChild(this.output)
      this.container.appendChild(outputContainer)
    }

    createButton(key: Key, rowContainer: HTMLDivElement): void {
      const { text, type } = key

      let className = `button text-${text} ${type}`
      let button: HTMLButtonElement = document.createElement('button')
      button.textContent = text
      button.className = className
      rowContainer.appendChild(button)
    }

    createRow(keys: Array<Array<Key>>) {
      keys.map(
        keyList => {
          let row: HTMLDivElement = document.createElement('div')
          row.classList.add('row')
          keyList.forEach(key => this.createButton(key, row))
          this.container.appendChild(row)
        }
      )
    }

    updateOutput() {
      if (!this.operator) {
        this.output.textContent = this.firstNumber
      } else if (this.secondNumber) {
        this.output.textContent = this.secondNumber
      }
    }

    calculate() {
      this.secondNumber = this.secondNumber || '0'
      switch (this.operator) {
        case ("÷"):
          if (this.secondNumber !== '0') {
            this.firstNumber = String(Number(this.firstNumber) / Number(this.secondNumber))
          }
          else {
            this.firstNumber = 'NaN'
          }
          break;

        case ("+"):
          this.firstNumber = String(Number(this.firstNumber) + Number(this.secondNumber))
          break;

        case ("-"):
          this.firstNumber = String(Number(this.firstNumber) - Number(this.secondNumber))
          break;

        case ("×"):
          this.firstNumber = String(Number(this.firstNumber) * Number(this.secondNumber))
          break;

        default:
          return;
      }

      this.firstNumber = String(Number(this.firstNumber).toPrecision(10))
        .replace(/0+$/, '')
        .replace(/\.$/, '')

      console.log(`firstnumber: ${this.firstNumber}`)

      this.secondNumber = null
      this.operator = null
      this.updateOutput()
    }

    bindEvents() {
      this.container.addEventListener('click', (e: Event) => {
        if (e.target instanceof HTMLButtonElement) {
          let button: HTMLButtonElement = e.target
          console.log(button)
          console.log(button.classList.value)
          let clickedValue: string

          // 如果用户点击的是数字
          if (button.classList.value.indexOf('number') > -1) {
              clickedValue = button.textContent || ''
              console.log(" clickedValue: ", clickedValue)
            



            // 如果没有 操作符, 那么拼接数字 firstNumber
            if (!this.operator) {

              console.log(String(this.firstNumber).indexOf('.'))
              if (clickedValue === '0' && this.firstNumber === '0' && !this.hasDecimalDot) {
              }
              else if (clickedValue === '.' && this.firstNumber.indexOf('.') < 0) {
                this.hasDecimalDot = true
              }

              else if (clickedValue !== '.') {
                if (this.hasDecimalDot) {
                  this.firstNumber = this.firstNumber + '.' + clickedValue
                  this.hasDecimalDot = false
                }
                else {
                  this.firstNumber = this.firstNumber + clickedValue
                }
              }


              console.log(this.firstNumber)
            }


            // 如果有操作符, 那么拼接数字 secondNumber
            else {
              this.secondNumber = this.secondNumber || '0'

              console.log(String(this.secondNumber).indexOf('.'))

              if (clickedValue === '0' && this.secondNumber === '0' && !this.hasDecimalDot) {
              }
              else if (clickedValue === '.' && String(this.secondNumber).indexOf('.') < 0) {
                this.hasDecimalDot = true
              }

              else if (clickedValue !== '.') {
                if (this.hasDecimalDot) {
                  this.secondNumber = this.secondNumber + '.' + clickedValue
                  this.hasDecimalDot = false
                }
                else {
                  this.secondNumber = this.secondNumber + clickedValue
                }
              }

              console.log("second:", this.secondNumber)
            }

          }


          // 如果点击的是操作符
          else if (button.classList.value.indexOf('operator') > -1) {
            let operator = button.textContent
            if (this.operator) {
              this.calculate()
            }
            this.operator = operator
          }


          // 如果点击的是命令
          else if (button.classList.value.indexOf('command') > -1) {
            let command: string | null = button.textContent
            //  = 将结果作为 firstNumber
            if (command === '=') {
              this.calculate()
            }

            if (command === 'Clear') {
              this.firstNumber = '0'
              this.secondNumber = null
              this.operator = null
            }
          }
          this.updateOutput()
        }
      })
    }
  }

  let keys: Array<Array<Key>> = [
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
  ]


  let calculator = new Calculator(keys)
}






