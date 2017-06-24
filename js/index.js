
// Variables
if (localStorage.weekProgramState === undefined) {
    localStorage.weekProgramState = "on";
}

// Constants
const daySelector = "#status-card .value1";
const timeSelector = "#status-card .value2";

const currentTempSelector = "#current-temp-card .value1";
const targetTempSelector = "#target-temp-card .value1";
const dayTempSelector = "#day-temp-card .value1";
const nightTempSelector = "#night-temp-card .value1";

// Element Manipulation
if (localStorage.homeHint == "false") {
    $("#hint-card").hide();
}

if (localStorage.lastState == "off") {
    $("#vacation-card input").prop("checked", true);
}

function update() {
    getDay(daySelector);
    getTime(timeSelector);
    
    getCurrentTemperature(currentTempSelector);
    getTargetTemperature(targetTempSelector);
    getDayTemperature(dayTempSelector);
    getNightTemperature(nightTempSelector);
    
    $("#target-temp-card .plus").prop("disabled", (parseInt(localStorage.targetTemperature) >= 30));
    $("#target-temp-card .minus").prop("disabled", (parseInt(localStorage.targetTemperature) <= 5));
    
    $("#day-temp-card .plus").prop("disabled", (parseInt(localStorage.dayTemperature) >= 30));
    $("#day-temp-card .minus").prop("disabled", (parseInt(localStorage.dayTemperature) <= 5)); 
    
    $("#night-temp-card .plus").prop("disabled", (parseInt(localStorage.nightTemperature) >= 30));
    $("#night-temp-card .minus").prop("disabled", (parseInt(localStorage.nightTemperature) <= 5)); 
    
    getWeekProgramState();
}

setInterval(function() {update();}, 100);

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
        
        localStorage.lastState = "off"
        setWeekProgramState("off");
    } else {
        localStorage.lastState = "on"
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
