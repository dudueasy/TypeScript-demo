
function bubbleSort(array: number[]): number[] {
  let container = [...array]

  for (let i = container.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (container[j] > container[j + 1]) {
        let tmp = container[j + 1]
        container[j + 1] = container[j]
        container[j] = tmp
      }
    }
  }

  return container
}


console.log(bubbleSort([100, 2, 399, 400, 1, 0]))


function selectSort(array: number[]): number[] {
  let container = [...array]
  for (let i = 0; i <= container.length - 2; i++) {
    let minIndex = i

    for (let j = i + 1; j <= container.length - 1; j++) {
      if (container[minIndex] > container[j]) {
        let tmp = container[minIndex]
        container[minIndex] = container[j]
        container[j] = tmp
      }
    }
  }

  return container
}


console.log(selectSort([0.1, 0, 0.3, 1, 3, 2, 0]))