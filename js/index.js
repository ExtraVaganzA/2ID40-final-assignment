
// Global Variables
var currentTemp = 20;
var targetTemp = 20;

//   Hint default states
var welcomeHint = true;
var vacationModeHint = true;

// Element Manipulation
if (!welcomeHint) {
    $("#welcome-card").hide();
}

updateTemps();

function updateTemps() {
    $("#current-temp-card h1").html(currentTemp + "&degC");
    $("#target-temp-card h1").html(targetTemp + "&degC");
}

// Click Functions
$("#welcome-card .close").click(function(){
    $("#welcome-card").hide();
});

$("#welcome-card .delete").click(function(){
    vacationModeHint = false;
    $("#welcome-card").hide();
});


$("#temp-plus").click(function(){
    ++targetTemp;
    
    if (targetTemp >= 30) {
        $("#temp-plus")[0].disabled = true;
    }
    
    $("#temp-minus")[0].disabled = false;
    
    updateTemps();
});

$("#temp-minus").click(function(){
    --targetTemp;
    
    if (targetTemp <= 5) {
        $("#temp-minus")[0].disabled = true;
    }
    
    $("#temp-plus")[0].disabled = false;
    
    updateTemps();
});

$("#vacation-checkbox").click(function() {
    if(vacationModeHint && $("#vacation-checkbox")[0].checked) {
        $("#vacation-dialog")[0].showModal();
    }
});

$("#vacation-dialog .close").click(function() {
    $("#vacation-dialog")[0].close();
});

$("#vacation-dialog .delete").click(function() {
    vacationModeHint = false;
    $("#vacation-dialog")[0].close();
});
