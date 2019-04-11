{
  interface Key {
    text: string,
    type: string
  }

  class Calculator {
    public container: HTMLDivElement;
    public output: HTMLDivElement;
    public firstNumber: number;
    public secondNumber: number;
    public operator: string;

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
      this.output = document.createElement('div')
      this.output.classList.add('output')

      let span: HTMLSpanElement = document.createElement('span')
      span.textContent = '0'
      this.output.appendChild(span)
      this.container.appendChild(this.output)
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

    bindEvents() {
      this.container.addEventListener('click', (e: Event) => {
        if (e.target instanceof HTMLButtonElement) {
          let button: HTMLButtonElement = e.target
          console.log(button)
          console.log(button.classList.value)

          if (button.classList.value.indexOf('number') > -1) {
            // 如果没有 操作符, 那么拼接数字 firstNumber
            // 如果有操作符, 那么拼接数字 secondNumber

          }
          else if (button.classList.value.indexOf('operator') > -1) {
            let operator: string = button.textContent
            console.log(operator)

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






