var multiply = function(array) {

  var runningproduct = 1;

  for (var i = 0; i < array.length;i++)
  {
    runningproduct *= array[i];
  }
  return runningproduct;
};

var newNumber = multiply([2, 2, 4, 4]);
console.log(newNumber);
