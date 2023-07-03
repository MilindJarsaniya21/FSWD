function printValues() {
  var message = "Hello, World!";
  let number = 42;
  const pi = 3.14159;

  document.write(message);
  document.write("<br>");

  document.write(number);
  document.write("<br>");

  document.write(pi);
  document.write("<br>");
}

printValues();

// The following lines will throw errors because the variables are not accessible outside the function
console.log(message);  // Error: message is not defined
console.log(number);   // Error: number is not defined
console.log(pi);       // Error: pi is not defined