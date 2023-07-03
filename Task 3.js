var age = parseInt(prompt("Enter your age: "));

        if (age < 18) {
            console.log("You are a minor.");
            document.getElementById("demo").innerHTML = "You are a minor...";
        } else if (age >= 18 && age <= 65) {
            console.log("You are an adult.");
            document.getElementById("demo").innerHTML = "You are an adult...";
        } else {
            console.log("You are a senior citizen.");
            document.getElementById("demo").innerHTML = "You are a senior citizen...";
        }