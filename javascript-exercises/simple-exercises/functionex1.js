var getIndex = function(listToCheck, value)
{
    for (var x = 0; x < listToCheck.length; x++)
    {
      if(listToCheck === undefined || value === undefined)
        return -1;
      if(listToCheck [x] === value)
        return x;
    }
        return -1;
};




var myList = ["jon","pete","bob"];
var name = "jennifer";

console.log(getIndex(myList, name));

/*function getIndex(array, value)
{
  if( !Array.isArray(array))
  {
    throw new Error ('non array passed to getIndex()');
  }
  for (var i = 0; i < array.length; i++)
  {if (array [i] === value)
    {
    return i;
    }
  }
    return -1;
}*/
