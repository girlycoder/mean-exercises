var reverse = function(stringToReverse)
 {
   var wordToChange = "";

  for (var x = stringToReverse.length - 1; x >= 0; x--)
    {
      var letter = stringToReverse[x];
      wordToChange += letter;
    }
  return wordToChange;

};
console.log(reverse("melissa is the coolest dork i knowå"));
