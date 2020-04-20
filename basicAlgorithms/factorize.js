function factorialize(num) {

    let result = 1;
    
    for (var i = num-1; i > 0; i--) {
      num = num * i;
      result = num;
      }
      return result;
    }
    
    factorialize(3);

    