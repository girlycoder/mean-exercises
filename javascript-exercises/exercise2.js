var maxOfThree = function(number1, number2, number3) {

  if (number1 > number2)
    return (number1);
  else if (number2 < number3)
    return (number3);
  if (number2 > number1)
    return (number2);
  else if (number2 < number3);
    return (number3);
  };

  console.log(maxOfThree(2, 3, 1));
