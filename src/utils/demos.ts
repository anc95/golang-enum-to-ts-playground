const demo1 = `
package main

type Status int

const (
  Todo Status = iota
  Pending
  Done
)
`.trim()

export { demo1 }