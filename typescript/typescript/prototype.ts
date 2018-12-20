function employee(name:string, emp_id:number){
    this.name = name;
    this.emp_id = emp_id;
}

let emp = new employee("Waseem", 9980668);
employee.prototype.email="tjwasim@gmail.com"
console.log(emp.name, emp.emp_id, emp.email);
logs(emp.name, emp.emp_id, emp.email);

function logs(...args:any[]){
    for(let i:number=0;i<args.length;i++)
        console.log(args[i]);
}

function dips(...args:any[]){
    for(let x of args){
        console.log(x);
    }
}