// 函数参数双向协变 
{
  enum EventType { Mouse, Keyboard }

  interface Event { timestamp: number; }
  interface MouseEvent extends Event { x: number; y: number }
  interface KeyEvent extends Event { keyCode: number }

  function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
  }

  // 回调函数 的 参数 被 形参的定义 兼容了, 它的参数更加复杂
  // unsound, 但是很常用也很常见的做法
  // Unsound, but useful and common 
  listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));


  // 使用了类型断言
  // 不符合 sound 的要求. 但是在 ts 中是可行的
  // Undesirable alternatives in presence of soundness
  listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));


  // 对函数整体进行了断言, <(e:Event) => void>(xxx) 断言, 
  // 从而 被 handler: (n: Event) => void) 兼容了.
  // 函数接收 e, 返回 void
  listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));


  // 以下实现是不被允许的, 因为 函数的参数 不符合/不被兼容 定义中的参数类型
  // Still disallowed (clear error). Type safety enforced for wholly incompatible types
  // listenEvent(EventType.Mouse, (e: number) => console.log(e));
}


