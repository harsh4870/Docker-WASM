export const wasmBrowserInstantiate = async (wasmModuleUrl, importObject) => {
    let response = undefined;
  
    if (WebAssembly.instantiateStreaming) {
      response = await WebAssembly.instantiateStreaming(
        fetch(wasmModuleUrl),
        importObject
      );
    } else {
      // Fallback to using fetch to download the entire module
      // And then instantiate the module
      const fetchAndInstantiateTask = async () => {
        const wasmArrayBuffer = await fetch(wasmModuleUrl).then(response =>
          response.arrayBuffer()
        );
        return WebAssembly.instantiate(wasmArrayBuffer, importObject);
      };
  
      response = await fetchAndInstantiateTask();
    }
  
    return response;
  };

const go = new Go(); 
const runWasmAdd = async () => {
  const importObject = go.importObject;

  const wasmModule = await wasmBrowserInstantiate("./main.wasm", importObject);

  go.run(wasmModule.instance);

  const addResult = wasmModule.instance.exports.add(24, 24);

  document.body.textContent = `Hello World! addResult: ${addResult}`;
};
runWasmAdd();