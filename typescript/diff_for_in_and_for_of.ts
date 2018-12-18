//Difference between for in loop and for as loop

Display("Red", "Green", "Blue", "Yellow");
function Display(...colors:string[]){

    console.log("Output using 'for....in; loop");
    for(let c in colors)
        console.log(c);
    
    console.log("Output using 'for....as' loop");
    for(let c of colors){
        console.log(c);
    }
}