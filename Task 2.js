function operations(a, b) {
    var sum = a + b;
    var dif = a - b;
    var mul = a * b;
    var div = a / b;

    return {
        sum,
        dif,
        mul,
        div,
    };
}

var result = operations(15, 25);

document.write("Variables are 15, 25");
document.write("<br>");

document.write("sum : " + result.sum);
document.write("<br>");

document.write("dif : " + result.dif);
document.write("<br>");

document.write("mul : " + result.mul);
document.write("<br>");

document.write("div : " + result.div);
document.write("<br>");
