

var date=(prompt("Enter the date"))
var month=(prompt("Enter the month"))
var year=(prompt("Enter the year "))

document.write("Your Date of Birth is :-",date+("/ ")+month+("/ ")+year);

if(year<2003){
	
    window.location.href="https://selfregistration.cowin.gov.in/";
}else{
	document.write("You are below 18")
}