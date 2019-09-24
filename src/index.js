module.exports = function zeros(expression) {
  let zero = 0;
  while (expression > 0){
    if (expression % 10 == 0) 
    zero++;
  }
  return zero;

  //let zero;
  //for( ; expression)
}
