function findElement(arr, func) {

    let num = 0;
    
    for (let i = 0; i < arr.length; i++){
  
      num = arr[i];
      //console.log(num);
  
      if (func(num) == true) {
        console.log(num, func(num)); 
        return num;
      }
    }
  }
  
  findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
 
  //complete
  