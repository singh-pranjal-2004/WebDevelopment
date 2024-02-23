let a = 10;
let b = 2;
let s = "*";
let ans = 0;
let n = Math.random()*100;
if(n<10){
    if(s==="+"){
        s="-"
    }
    if(s==="*"){
        s="+"
    }
    if(s==="-"){
        s="/"
    }
    if(s==="/"){
        s="**"
    }
}

switch(s){
    case "+":
        ans = a+b;
        break;
    case "-":
        ans = a-b;
        break;
    case "*":
        ans = a*b;
        break;
    case "/":
        ans = a/b;
        break;
    case "**":
        ans = a**b;
        break;
}

console.log(ans);