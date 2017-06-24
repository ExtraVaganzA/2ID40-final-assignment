
// Variables
if (localStorage.targetTemp === undefined) {
    localStorage.targetTemp = "21.0";
}

if (localStorage.weekProgramState === undefined) {
    localStorage.weekProgramState = "on";
}

// Constants
const daySelector = "#status-card .value1";
const timeSelector = "#status-card .value2";

const currentTempSelector = "#current-temp-card .value1";
const targetTempSelector = "#target-temp-card .value1";

// Element Manipulation
if (localStorage.welcomeHint == "false") {
    $("#welcome-card").hide();
}

if (localStorage.lastState == "off") {
    $("#vacation-card input").prop("checked", true);
}

function update() {
    getDay(daySelector);
    getTime(timeSelector);
    
    getCurrentTemperature(currentTempSelector);
    getTargetTemperature(targetTempSelector);
    
    $("#temp-plus").prop("disabled", (parseInt(localStorage.targetTemperature) >= 30));
    $("#temp-minus").prop("disabled", (parseInt(localStorage.targetTemperature) <= 5)); 
    
    getWeekProgramState();
}

setInterval(function() {update();}, 100);

// Click Functions
$("#welcome-card .close").click(function(){
    $("#welcome-card").hide();
});

$("#welcome-card .delete").click(function(){
    localStorage.welcomeHint = false;
    $("#welcome-card").hide();
});

$("#temp-plus").click(function(){
    setTargetTemperature((parseInt(localStorage.targetTemperature) + 1).toString());
});

$("#temp-minus").click(function(){
    setTargetTemperature((parseInt(localStorage.targetTemperature) - 1).toString());
});

$("#vacation-card input").click(function() {
    if($("#vacation-card input").prop("checked")) {
        if (localStorage.vacationModeHint != "false") {
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
    localStorage.vacationModeHint = "false";
    $("#vacation-dialog")[0].close();
});
