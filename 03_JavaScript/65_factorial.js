// let n = 6;
// let fact = 1;
// for(let i = 1;i<=n;i++){
//     fact*=i;
// }
// console.log(fact);

let n = 10;
let arr = Array.from(Array(n+1).keys());
// for(let i = 0;i<n;i++){
//     arr[i]=i+1;
// }
const fun=(a, b)=>{
    return a*b;
}
console.log(arr.slice(1,).reduce(fun));