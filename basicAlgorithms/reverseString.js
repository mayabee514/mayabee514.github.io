function reverseString(str) {
  var reverse = "";
  for (var i=str.length-1; i >= 0; i--){
    reverse += str[i];
    }
  console.log(reverse);
  return reverse;
  
  }
  
  reverseString("hello");
  
  //complete
  