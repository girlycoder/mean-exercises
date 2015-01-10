var sum = function(arrayToCalculate)
{
    var runningSum = 0;

    for (var x = 0; x < arrayToCalculate.length;x++)
    {
        runningSum += arrayToCalculate[x];
    }

    return runningSum;
};


var newSum = sum([5,2,4,1]);
console.log(newSum);
