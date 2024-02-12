function titleCase(str) {
    // Split the string into an array of words
    var words = str.split(' ');
  
    // Capitalize the first letter of each word and make the rest lowercase
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase();
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    // Join the words back into a sentence
    var result = words.join(' ');
  
    return result;
  }
  
  console.log(titleCase("I'm a little tea pot")); // that will print : "I'm A Little Tea Pot"
  console.log(titleCase("sHoRt AnD sToUt")); // that will print : "Short And Stout"