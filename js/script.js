// Front End
$(document).ready(function(){
	$("#leap-year").submit(function(event) {
		event.preventDefault();
		var year = parseInt($("#year").val());
		console.log(year);
		var result = leapYear(year);
		$("#result").text(result);
	});

});

// Backend
var leapYear = function(year) {
	if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
	return true;
  } else {
    return false;
  }
};