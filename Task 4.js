function findMinMax(numbers) {
  let minimum = numbers[0];
  let maximum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < minimum) {
          minimum = numbers[i];
      }

      if (numbers[i] > maximum) {
          maximum = numbers[i];
      }
  }

  return {
      min: minimum,
      max: maximum
  };
}

const numberArray = [25000, 14000, 32000, 8000, 45000, 19000];
const result = findMinMax(numberArray);

document.write("Minimum Number: " + result.min);
document.write("<br>");
document.write("Maximum Number: " + result.max);
document.write("<br>");
