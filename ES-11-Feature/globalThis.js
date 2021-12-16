//globalThis object that provides a standard way to access the global object across environments.

function canMakeHTTPRequest() {
    return typeof globalThis.XMLHttpRequest === 'function';
  }
  
  console.log(canMakeHTTPRequest());
  //  output (in a browser): true

  const one = 1;
  var two = 2;
  console.log(one); // 1
  console.log(two); // 2
  
  // Not all declarations create properties of the global object:
  console.log(globalThis.one); // undefined
  console.log(globalThis.two); // 2