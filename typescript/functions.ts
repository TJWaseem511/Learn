function add(...y:number[]){
    /*for(let i=0;i<y.length;i++)
        x+=y[i];*/
    let sum:number=0;
    let x:any;
    for(x of y)
    sum+=x;
    return sum;;
}

console.log(add(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20));

function display(f_name: string, l_name?: string){
    let message:string = "Welcome "+f_name;
    message +=l_name?" "+l_name:"";
    return message;
}
console.log(display("Waseem", "Ur Rahman"))