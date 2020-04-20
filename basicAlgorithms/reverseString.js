function reverseString(str) {
  
  let arr = [];
  arr = str.split('');
  let newArr = [];
  
    for (var i = arr.length -1; i >= 0; i--){
  
      newArr.push(arr[i]);
   
    }
  
    let result = newArr.join("");
    return console.log(result);
  
  }
    
    reverseString("Greetings from Earth");
    


    //incomplete. will not return the correct "string"