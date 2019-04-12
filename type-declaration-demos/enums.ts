{
  let log = console.log.bind(console)

  enum Direction {
    up = "up",
    down = "down",
    left = "left",
    right = "right"
  }

  log(Direction.up)
  log(Direction.left)
  log(Direction["up"])
  log(Direction["left"])

  // 变量 x 的类型必须是 枚举类型 Direction 中的一个定义
  let x: Direction
  x = Direction['up']
  console.log('x: ', x)
}