
for ( var number = 1; number <= 100; number ++ ) {
  
  var diviby3 = number % 3;
  var diviby5 = number % 5;

  // FizzBuzz
  if ( (diviby3 == 0) && (diviby5 == 0) ) 
  	console.log( "FizzBuzz");
  
  //Fizz
  else if (diviby3 == 0)
    console.log( "Fizz");
  
  //Buzz
  else if (diviby5 == 0)
    console.log( "Buzz");
  
  else
    console.log( number );
} 
