{
  let contanier: HTMLDivElement = document.createElement('div')
  contanier.classList.add('container')
  document.body.appendChild(contanier)

  let keys: Array<Array<string>> = [
    // let keys: Key[] = [
    ['clear', '÷'],
    ['7', '8', '9', '✖',],
    ['4', '5', '6', '-',],
    ['1', '2', '3', '+',],
    ['0', '.', '-',],
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
    keyList.forEach(key => createButton(key, row))
    contanier.appendChild(row)
  }

  keys.map(keyList => createRow(keyList))
}
