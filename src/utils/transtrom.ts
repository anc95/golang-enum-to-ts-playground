const transform = async (value: string) => {
  const res = fetch("main.wasm");
  const go = new (window as any).Go()

  return new Promise<string>(resolve => {
    WebAssembly.instantiateStreaming(res, go.importObject).then((result) => {
      go.run(result.instance);
      const ret: string = (window as any).tranformGolangEnum(value)
      resolve(ret || "")
    });
  })
}

export { transform }