{
  // 定义计算器整体容器
  let contanier: HTMLDivElement = document.createElement('div')
  contanier.classList.add('calculator')
  document.body.appendChild(contanier)


  // 定义计算输出容器
  let output: HTMLDivElement = document.createElement('div')
  output.classList.add('output')

  let span: HTMLSpanElement = document.createElement('span')
  span.textContent = '0'
  output.appendChild(span)
  contanier.appendChild(output)


  let keys: Array<Array<string>> = [
    // let keys: Key[] = [
    ['Clear', '÷'],
    ['7', '8', '9', '✖',],
    ['4', '5', '6', '-',],
    ['1', '2', '3', '+',],
    ['0', '.', '=',],
  ]

  function createButton(text: string, rowContainer: HTMLElement, className: string = ''): void {
    let button: HTMLButtonElement = document.createElement('button')
    button.textContent = text
    button.className = className
    rowContainer.appendChild(button)
  }

  function createRow(keyList: Array<string>) {
    let row: HTMLDivElement = document.createElement('div')
    row.classList.add('row')
    keyList.forEach(key => createButton(key, row, `button text-${key}`))
    contanier.appendChild(row)
  }

  keys.map(keyList => createRow(keyList))
}
