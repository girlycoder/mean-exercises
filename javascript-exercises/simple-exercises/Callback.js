var computeArray = function(arrayToCompute, computeFunction)
//compute function is the return value *5 at the bottom
//arrayToCompute is the var numArray
{
  var newArray = [];
  for (var x = 0; x < arrayToCompute.length; x++)
  {
    var newVal = computeFunction([arrayToCompute[x]]);
    newArray.push(newVal);

  }

  return newArray;
};


var numArray = [1,2,3,4,5];

var newArray = computeArray(numArray, function computeBy5(value)
{
  return value * 5;
});
var negaive = computeArray(numArray, function (value)

{
  return value * -1;
});

console.log (negative);
