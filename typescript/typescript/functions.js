function add() {
    var y = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        y[_i] = arguments[_i];
    }
    /*for(let i=0;i<y.length;i++)
        x+=y[i];*/
    var sum = 0;
    var x;
    for (var _a = 0, y_1 = y; _a < y_1.length; _a++) {
        x = y_1[_a];
        sum += x;
    }
    return sum;
    ;
}
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20));
function display(f_name, l_name) {
    var message = "Welcome " + f_name;
    message += l_name ? " " + l_name : "";
    return message;
}
console.log(display("Waseem", "Ur Rahman"));
