//Arrays

//Syntax & declaration.
//let <Array_Name>[:<type];
//Arrays can be declared in following ways:

//1.  One line delcaration & initialization:
    // let <Array_Name>[:<type] = [values];
    let Array1:number[] = [1,2,3,4,5,6,7,8,9,10];

    // Here type is optional. If we omit type, array will be of 'any' type
    let Array2 = ['a','b','c','d','e'];

//2. multiple line declaration & initialization;
    let Array3:string[];
    Array3 = ["Waseem", "Rashiq", "Muzaffar", "Owk", "Yaswanth"];

//3. declaratio using Array object;
    //by size
    let Array4 = new Array(5);//This will create an array with size 5

    //by values
    let Array5 = new Array(['a','b','c','d','e']);

    //by passing another Array to the object
    let Array6 = new Array(Array3);


//Printing Array
    //1. Using console.log
    console.log(Array1);

    //2. using for loop
    for(let i=0;i<Array2.length;i++)
        console.log(Array2[i]);
    
    //3. using for....as loop

    for(let x of Array3)
        console.log(x);