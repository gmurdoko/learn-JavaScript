function calc(in1, in2, operate) {
    switch (operate) {
        case "+":
            console.log(in1 + in2);
            break;
        case "-":
            console.log(in1 - in2);
            break;
        case "*":
            console.log(in1 * in2);
            break;
        case "/":
            if (in1 == 0 || in2 == 0) {
                console.log("can't divide");
            } else {
                console.log(in1 / in2);
            }
            break;
        default:
            console.log(`operate not valid`);
            break;
    }
}
calc(10, 20, "+");
calc(10, 20, "-");
calc(10, 20, "*");
calc(10, 20, "/");
