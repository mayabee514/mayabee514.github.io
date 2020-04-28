function confirmEnding(str, target) {

    let result = "";
    for (var i = 0; i < str.length; i++) {
      str[i] == target ? result += str[i] : "n/a";
    }
    console.log(result);
    
    }
    
    confirmEnding("Congratulation", "on");
    
    /*
      if (result == target) {
          return "true";
      }

      //incomplete. this is not working at all.