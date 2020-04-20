function largestOfFour(arr) {

    let newArr = [0,0,0,0];
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {

     if (arr[i][j] > newArr[i]) {
      newArr[i] = arr[i][j];  
      }
     }
    }
    console.log(newArr);
      return newArr;
    }
       
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

// doesn't work with negative numbers b/c newArr uses zero as a placeholder. 
//line 8 dictates if arr[i][j] is greater than newarr[i] which is, at its lowest, zero (line 3).

//look into alternatives using map() and reduce() or try a version with map() and apply() using Math.max();