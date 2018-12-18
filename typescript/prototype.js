function employee(name, emp_id) {
    this.name = name;
    this.emp_id = emp_id;
}
var emp = new employee("Waseem", 9980668);
employee.prototype.email = "tjwasim@gmail.com";
console.log(emp.name, emp.emp_id, emp.email);
logs(emp.name, emp.emp_id, emp.email);
function logs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++)
        console.log(args[i]);
}
function dips() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var x = args_1[_a];
        console.log(x);
    }
}
