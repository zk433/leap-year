// Front End
$(document).ready(function(){
	$("#leap-year").submit(function(event) {
		event.preventDefault();
		var year = parseInt($("#year").val());
		var result = leapYear();
		$("#result").text(result);
	});

});

// Backend
var leapYear = function(year) {
	return false;
}