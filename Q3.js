function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var result = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(result);
    document.write(result);
    
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var result = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(result);
    document.write(result);
} 
cToF(60);//Arguments 
fToC(45);//Arguments