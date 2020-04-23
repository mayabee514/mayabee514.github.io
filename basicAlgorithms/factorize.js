function factorialize(num) {
  let result = 1;
  
    for (var i = num-1; i > 0; i--) {
      num *= i;
      result = num;
    }
   
  console.log(result);
  return result;
       
  }
  
  factorialize(5);
  
//complete
