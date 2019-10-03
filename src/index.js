module.exports = function zeros(expression) {

  let a = expression.split("*");
let count;  // считает кол-во !
let num; // с помощью него мы проходим по факториалу!!!!
let num_2 = 0;
let num_5 = 0;
let result;
for(let x = 0; x < a.length; x++){
count = a[x].split("!").length - 1;
  if (count == 1){                        // если один !
      num = parseInt(a[x]);
      for( let z = 1; z <= num; z++){
        if (z % 2 == 0) num_2++;
        if (z % 5 == 0) num_5++;
        if(z == 25) num_5++;
        if(z == 50) num_5++;
        if(z == 75) num_5++;
        if(z == 100) num_5++;
      }
  } else if (count == 2) {
      num = parseInt(a[x]); //факториал,с которым производится операция
      if (num % 2 == 0){
        for( let z = 2; z <= num; z +=2){
          if (z % 2 == 0) num_2++;
          if (z % 5 == 0) num_5++;
          if(z == 25) num_5++;
          if(z == 50) num_5++;
          if(z == 75) num_5++;
          if(z == 100) num_5++;
        }
        } else {
          for ( let y = 1; y <= num; y += 2){
            if ( y % 5 == 0) num_5++;
            if(y == 25) num_5++;
            if(y == 50) num_5++;
            if(y == 75) num_5++;
            if(y == 100) num_5++;
          }
      }
    }
  
}
result = (num_2 > num_5) ? num_5 : num_2;
return result;
  // let a = expression.split("*");
  // let count = expression.split("!").length - 1;
  // if()
  // let num;
  // let num_2 = 0;
  // let num_5 = 0;
  // for (let i = 0; i < a.length; i++){
  //   num = parseInt(a[i]);
  //   for( let z = 1; z <= num; z++){
  //     if (z % 2 == 0) num_2++;
  //     if (z % 5 == 0) num_5++;
  //   }
  // }
  // let result = (num_2 > num_5) ? num_5 : num_2;
  // return result;
}
