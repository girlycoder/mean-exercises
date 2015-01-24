var runningCalcStr = "";
// numbers your adding on calc
var numbersToAdd = [];
//sum of all pressed numbers

var handleButtonPress = function()
{
  if (numbersToAdd.length === 0)
  {
    runningCalcStr = this.id;
  }
  //this id is whatever is being pressed
  else
  {
    var newStr = " + " + this.id;
    runningCalcStr += newStr;
  }
  numbersToAdd.push(parseInt(this.id));
  document.getElementById("runningcalc").innerHTML = runningCalcStr;
};

var add = function()
{
  var sum = 0;
  for (var x = 0; x < numbersToAdd.length;x++)
  {
    sum += numbersToAdd[x];
  }

  document.getElementById("runningcalc").innerHTML = runningCalcStr + " = " + sum.toString();
};

document.getElementById("1").addEventListener("click",handleButtonPress);
document.getElementById("2").addEventListener("click",handleButtonPress);
document.getElementById("3").addEventListener("click",handleButtonPress);
document.getElementById("4").addEventListener("click",handleButtonPress);
document.getElementById("5").addEventListener("click",handleButtonPress);
document.getElementById("6").addEventListener("click",handleButtonPress);
document.getElementById("7").addEventListener("click",handleButtonPress);
document.getElementById("8").addEventListener("click",handleButtonPress);
document.getElementById("9").addEventListener("click",handleButtonPress);
document.getElementById("0").addEventListener("click",handleButtonPress);
document.getElementById("add").addEventListener("click",add);
