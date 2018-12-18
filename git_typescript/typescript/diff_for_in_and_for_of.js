//Difference between for in loop and for as loop
Display("Red", "Green", "Blue", "Yellow");
function Display() {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    console.log("Output using 'for....in; loop");
    for (var c in colors)
        console.log(c);
    console.log("Output using 'for....as' loop");
    for (var _a = 0, colors_1 = colors; _a < colors_1.length; _a++) {
        var c = colors_1[_a];
        console.log(c);
    }
}
