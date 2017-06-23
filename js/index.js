
// Set local storage variables if this is the first visit.
if (localStorage.welcomeHint === undefined) {
    localStorage.welcomeHint = true;
}

if (localStorage.vacationModeHint === undefined) {
    localStorage.vacationModeHint = true;
}

// Element Manipulation
if (localStorage.welcomeHint == "false") {
    $("#welcome-card").hide();
}

function update() {
    getDay();
    getTime();
    
    $("#day-time").html(day + " - " + time);
    
    getCurrentTemperature();
    getTargetTemperature();
    
    $("#current-temp-card h2").html(currentTemperature + "&degC");
    $("#target-temp-card h2").html(targetTemperature + "&degC");
    
    $("#temp-plus")[0].disabled = (targetTemperature >= 30);
    $("#temp-minus")[0].disabled = (targetTemperature <= 5);
    
    getWeekProgramState();
    
    if (weekProgramState == "on") {
        $("#vacation-checkbox")[0].checked = false;
    } else {
        $("#vacation-checkbox")[0].checked = true;
    }
}

setInterval(function() {update();}, 500);

// Click Functions
$("#welcome-card .close").click(function(){
    $("#welcome-card").hide();
});

$("#welcome-card .delete").click(function(){
    localStorage.welcomeHint = false;
    $("#welcome-card").hide();
});


$("#temp-plus").click(function(){
    setTargetTemperature((parseInt(targetTemperature) + 1).toString());
});

$("#temp-minus").click(function(){
    setTargetTemperature((parseInt(targetTemperature) - 1).toString());
});

$("#vacation-checkbox").click(function() {
    if($("#vacation-checkbox")[0].checked) {
        if (localStorage.vacationModeHint == "true") {
            $("#vacation-dialog")[0].showModal();
        }
        
        setWeekProgramState("off");
    } else {
        setWeekProgramState("on");
    }
});

$("#vacation-dialog .close").click(function() {
    $("#vacation-dialog")[0].close();
});

$("#vacation-dialog .delete").click(function() {
    localStorage.vacationModeHint = false;
    $("#vacation-dialog")[0].close();
});
