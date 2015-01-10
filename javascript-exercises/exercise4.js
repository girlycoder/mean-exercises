var isVowel = function(letter)
{

  if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u")
    return true;
    else
      return false;

};

var changeWord = function(wordToChange)
{
  var newWord = "";

  for (var x = 0; x < wordToChange.length; x++)
  {
    var letter = wordToChange[x];

    if(isVowel(letter) === false)
    {
      newWord += letter;
      newWord += "o";
      newWord += letter;
    }
    else
    {
      newWord += letter;
    }
  }
};

console.log(changeWord("this is fun"));
