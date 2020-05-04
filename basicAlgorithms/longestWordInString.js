function findLongestWordLength(str) {

    const arr = str.split(' ');
    var longest = 0;
    
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].length > longest) {
            longest = arr[i].length;  
        } 

    }
  console.log(longest);
  return longest;
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");


//complete