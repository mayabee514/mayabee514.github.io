function largestOfFour(arr) {

  let newArr = [];
      
      for (let i = 0; i < arr.length; i++) {
  newArr.push(Math.max(...arr[i]))
        } 
  console.log(newArr);
  return newArr;
      }
        
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);


  //complete
  