// Adjectives:
// Crazy
// Amazing
// Fire 

// Name: 
// Engine
// Foods
// Garments

// Another name:
// Bros 
// Limited 
// Hub 

let a="", n="", s="";
let x = Math.floor(Math.random()*10/4);
let y = Math.floor(Math.random()*10/4);
let z = Math.floor(Math.random()*10/4);
switch(x){
    case 0:
        a+="Crazy";
        break;
    case 1:
        a+="Amazing";
        break;
    case 2:
        a+="Fire";
        break;
}

switch(y){
    case 0:
        n+="Engine";
        break;
    case 1:
        n+="Food";
        break;
    case 2:
        n+="Garment";
        break;
}

switch(z){
    case 0:
        s+="Bros";
        break;
    case 1:
        s+="Limited";
        break;
    case 2:
        s+="Hub";
        break;
}

console.log(`${a} ${n} ${s}`);

