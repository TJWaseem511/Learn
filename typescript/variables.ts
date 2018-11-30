//Variable declaration in typescript

// 1.Basic declaration
//Syntax
// var <variable_name>[= <value>];

var a = 10;
//above example creates a variable named a & assign value 10 to it
console.log(10);

//2. Declaration with specified data type
//Syntax
// var <var_name>:<var_type>
// Below example creates a number variable called acc_no
var acc_no:number = 1234;
console.log(acc_no);

var F_name:string = "Waseem";
console.log(F_name);

//3. More on variables
//Once we declare a variable with datatype, we cannot assign value of another type to it
//The statement F_name = 50; will give an ERROR message
//Error by VSC intellisense "[ts] Type '50' is not assignable to type 'string'. [2322]""