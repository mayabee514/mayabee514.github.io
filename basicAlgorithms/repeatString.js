function repeatStringNumTimes(str, num) {
    let result = "";
      if (num <= 0) {
        result = "";
      }
    
      else {
    
        for (let i = 0; i < num; i++) {
          result += str;
          console.log(result);
          }
      }
    
    return result;
    
    }
    
    repeatStringNumTimes("*", 3);

    //complete