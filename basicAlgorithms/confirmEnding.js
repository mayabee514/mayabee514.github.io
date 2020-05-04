function confirmEnding(str, target) {

//create regex from variable using new RegExp.
  let regex = new RegExp(target + "$");

//test returns true or false.
  return (regex.test(str));
  }
  
  confirmEnding("Connor", "n");
  

  //complete