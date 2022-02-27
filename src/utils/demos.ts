const demo1 = `package main

type Status int

const (
  // hello
  Todo Status = iota
  Pending
  Done
)

type Color string

type Sex string

const (
  // sex start
  Female Sex = "female"
  Male = "male"
  // color start
  Red Color = "red"
  Yellow = "yellow"
)
`

export { demo1 }