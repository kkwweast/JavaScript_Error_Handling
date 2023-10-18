// TODO: Enable strict mode
'use strict';
// 
  // TODO: Add a try/catch block toTODO: Fix the following parameter list
function parseToJSON(data, data) {
  // attempt to convert 'data' to JSON
  return JSON.parse(data); 
  
  // TODO: if an exception is raised
  // print the error to the console
  // and return null
}    

function parseData(data) {
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return null;
  }
}
console.log(parseData("invalidJson")); 
console.log(parseData('{"success": true }')); 


let failData = "<h1>Hello World!</h1>"

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
