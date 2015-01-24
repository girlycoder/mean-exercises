var myLetters = ['a', 'b', 'c' , 'd', 'e', 'f' , 'g', 'h', 'i', 'j', 'k', 'l','m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var vowelArray = myLetters.filter(function(letter)
{
  if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u")
    return true;
    else
      return false;
});

console.log(vowelArray);
//example from class
