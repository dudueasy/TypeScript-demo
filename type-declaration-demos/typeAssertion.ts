{
  function tell(a: string | Array<any>): void {
    if (a as string) {
      console.log(a)
    }
    else if (a as Array<any>) {
      console.log(a.toString())
    }
  }

  tell([1,2,3])
  tell('this is a string')
}
