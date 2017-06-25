
// Element Manipulation
if (localStorage.homeHint == "false") {
    $("#hint-card").hide();
}

if (localStorage.weekProgramState == "off") {
    $("#vacation-card input").prop("checked", true);
}

function updateVariables(errCode, respRaw, respText) {
    var xml = $.parseXML(respRaw);
    
    // Update day and time.
    localStorage.day = $(xml).find("current_day").text();
    $("#status-card .value1").text(localStorage.day);
    
    localStorage.time = $(xml).find("time").text();
    $("#status-card .value2").text(localStorage.time);
    
    // Update temperatures.
    localStorage.currentTemperature = $(xml).find("current_temperature").text();
    $("#current-temp-card .value1").text(localStorage.currentTemperature);
    
    localStorage.targetTemperature = $(xml).find("target_temperature").text();
    $("#target-temp-card .value1").text(localStorage.targetTemperature);
    
    localStorage.dayTemperature = $(xml).find("day_temperature").text();
    $("#day-temp-card .value1").text(localStorage.dayTemperature);
    
    localStorage.nightTemperature = $(xml).find("night_temperature").text();
    $("#night-temp-card .value1").text(localStorage.nightTemperature);
    
    // Update temperature buttons.
    $("#target-temp-card .plus").prop("disabled", (parseInt(localStorage.targetTemperature) >= 30));
    $("#target-temp-card .minus").prop("disabled", (parseInt(localStorage.targetTemperature) <= 5));
    
    $("#day-temp-card .plus").prop("disabled", (parseInt(localStorage.dayTemperature) >= 30));
    $("#day-temp-card .minus").prop("disabled", (parseInt(localStorage.dayTemperature) <= 5)); 
    
    $("#night-temp-card .plus").prop("disabled", (parseInt(localStorage.nightTemperature) >= 30));
    $("#night-temp-card .minus").prop("disabled", (parseInt(localStorage.nightTemperature) <= 5)); 
    
}

setInterval(function() {
    getThermostat("updateVariables");
}, 100);

// Click Functions
$("#hint-card .close").click(function(){
    $("#hint-card").hide();
});

$("#hint-card .delete").click(function(){
    localStorage.homeHint = false;
    $("#hint-card").hide();
});

$("#target-temp-card .plus").click(function(){
    setTargetTemperature((parseInt(localStorage.targetTemperature) + 1).toString());
});

$("#target-temp-card .minus").click(function(){
    setTargetTemperature((parseInt(localStorage.targetTemperature) - 1).toString());
});

$("#day-temp-card .plus").click(function(){
    setDayTemperature((parseInt(localStorage.dayTemperature) + 1).toString());
});

$("#day-temp-card .minus").click(function(){
    setDayTemperature((parseInt(localStorage.dayTemperature) - 1).toString());
});

$("#night-temp-card .plus").click(function(){
    setNightTemperature((parseInt(localStorage.nightTemperature) + 1).toString());
});

$("#night-temp-card .minus").click(function(){
    setNightTemperature((parseInt(localStorage.nightTemperature) - 1).toString());
});

$("#vacation-card input").click(function() {
    if($("#vacation-card input").prop("checked")) {
        if (localStorage.vacationHint != "false") {
            $("#vacation-dialog")[0].showModal();
        }
        
        localStorage.weekProgramState = "off"
        setWeekProgramState("off");
    } else {
        localStorage.weekProgramState = "on"
        setWeekProgramState("on");
    }
});

$("#vacation-dialog .close").click(function() {
    $("#vacation-dialog")[0].close();
});

$("#vacation-dialog .delete").click(function() {
    localStorage.vacationHint = "false";
    $("#vacation-dialog")[0].close();
});
