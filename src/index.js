module.exports = function zeros(expression) {



let a = expression.split("*");
let nul = 0
for (let ind = 0; ind <= a; ind++){
  let num = parseInt(a[ind])

let mul = 1;
for (let i = 1; i <= num; i++){
mul *= i; 
}
let z;
let nul = 0;
let b;
for (z = 1; z <= mul; z++){
  if ((z % 5 == 0) & (z % 2 == 0)){
    mul = mul/10;
    nul++;
  }
}
}
return nul;

// let a = expression.split("*");
// let num = parseInt(a[0]);
// let mul = 1;
// for (let i = 1; i <= num; i++){
// mul *= i; 
// }
// let z;
// let nul = 0;
// let b;
// for (z = 1; z <= mul; z++){
//   if ((z % 5 == 0) & (z % 2 == 0)){
//     mul = mul/10;
//     nul++;
//   }
// }
// }
// return nul;
}
