function checkNumber() {
  const number = parseInt(prompt("Enter a number:"));

  try {
      if (number < 0) {
          throw new Error("Number cannot be negative.");
      } else {
          alert("Number is valid!");
      }
  } catch (error) {
      alert("Error: " + error.message);
  }
}
