#!/usr/bin/env ts-node
{
  class Person {
    children: Person[] = [];

    constructor(public name: string) {
      this.name = name
    }

    addChildren(children: Person[]): void {
      this.children.push(...children)
    }

    introduceFamily(generation: number = 0): void {
      console.log(`${'----'.repeat(generation)} ${this.name}`)

      this.children.forEach(child => child.introduceFamily(generation + 1))
    }
  }

  let apolo = new Person('Apolo')
  let child1 = new Person('Alex')
  let child2 = new Person('Tom')

  let grandChild1 = new Person('Beatriz')
  let grandChild2 = new Person('Bruer')

  child1.addChildren([grandChild1, grandChild2])

  apolo.addChildren([child1, child2])

  apolo.introduceFamily()
} 