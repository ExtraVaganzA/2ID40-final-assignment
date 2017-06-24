// Set local storage variables if this is the first visit.
if (localStorage.welcomeHintWeek === undefined) {
    localStorage.welcomeHintWeek = true;
}

// Element Manipulation
if (localStorage.welcomeHintWeek == "false") {
    $("#welcome-card-week").hide();
}

// Click Functions
$("#welcome-card-week .close").click(function(){
    $("#welcome-card-week").hide();
});

$("#welcome-card-week .delete").click(function(){
    localStorage.welcomeHintWeek = false;
    $("#welcome-card-week").hide();
});

$("#day-temp-plus").click(function(){
    setDayTemperature((parseInt(localStorage.dayTemperature) + 1).toString());
});

$("#day-temp-minus").click(function(){
    setDayTemperature((parseInt(localStorage.dayTemperature) - 1).toString());
});

$("night-temp-plus").click(function(){
	setNightTemperature((parseInt(localStorage.nightTemperature) + 1).toString());
});

$("night-temp-minus").click(function(){
	setNightTemperature((parseInt(localStorage.nightTemperature) - 1).toString());
});

// Constants
const dayTempSelector = "#day-temp-card .value3";
const nightTempSelector = "#night-temp-card .value4";

function update() {    
    getDayTemperature(dayTempSelector);
	getNightTemperature(nightTempSelector);
	
    $("#day-temp-plus").prop("disabled", (parseInt(localStorage.dayTemperature) >= 30));
    $("#day-temp-minus").prop("disabled", (parseInt(localStorage.dayTemperature) <= 5));  
	$("#night-temp-plus").prop("disabled", (parseInt(localStorage.nightTemperature) >= 30));
    $("#night-temp-minus").prop("disabled", (parseInt(localStorage.nightTemperature) <= 5)); 
	
}

setInterval(function() {update();}, 100);