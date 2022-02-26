package main

import (
	"syscall/js"

	. "github.com/anc95/golang-enum-to-ts"
)

func transform(this js.Value, p []js.Value) interface{} {
	return Transform(p[0].String())
}

func main() {
	for true {
		c := make(chan bool)
		js.Global().Set("tranformGolangEnum", js.FuncOf(transform))
		c <- true
	}
}
