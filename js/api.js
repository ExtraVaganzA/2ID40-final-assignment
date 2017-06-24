
//  Variables
var thermostat = undefined;

var day = undefined;
var time = undefined;

var currentTemperature = undefined;
var targetTemperature = undefined;
var dayTemperature = undefined;
var nightTemperature = undefined;

var weekProgramState = undefined;
var weekProgram = undefined;

//   Constants
const serverPath = "http://wwwis.win.tue.nl/2id40-ws/";
const id = "26/";

//   Functions
// Thermostat
function setThermostat() {
    $.ajax({
        url: serverPath + id,
        type: "PUT",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
        },
    });
}

function getThermostat() {
    $.ajax({
        url : serverPath + id,
        type : "GET",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
            thermostat = xhr.responseText;
        },
    });
}

function deleteThermostat() {
    $.ajax({
        url : serverPath + id,
        type : "DELETE",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
        },
    });
}

// Day
function setDay(nDay) {
    day = nDay.toString();
    
    $.ajax({
        url: serverPath + id + "day",
        type: "PUT",
        data: "<current_day>" + nDay + "</current_day>",
        contentType: "xml",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
        },
    });
}

function getDay() {
    $.ajax({
        url: serverPath + id + "day",
        type: "GET",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
            day = $(xhr.responseXML).text();
        },
    });
}

// Time
function setTime(nTime) {
    time = nTime.toString();
    
    $.ajax({
        url: serverPath + id + "time",
        type: "PUT",
        data: "<time>" + nTime + "</time>",
        contentType: "xml",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
        },
    });
}

function getTime() {
    $.ajax({
        url: serverPath + id + "time",
        type: "GET",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
            time = $(xhr.responseXML).text();
        },
    });
}

// Current Temperature
function setCurrentTemperature(temperature) {
    currentTemperature = temperature.toString();
    
    $.ajax({
        url: serverPath + id + "currentTemperature",
        type: "PUT",
        data: "<current_temperature>" + temperature + "</current_temperature>",
        contentType: "xml",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
        },
    });
}

function getCurrentTemperature() {
    $.ajax({
        url: serverPath + id + "currentTemperature",
        type: "GET",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
            currentTemperature = $(xhr.responseXML).text();
        },
    });
}

// Target Temperature
function setTargetTemperature(temperature) {
    targetTemperature = temperature.toString();
    
    $.ajax({
        url: serverPath + id + "targetTemperature",
        type: "PUT",
        data: "<target_temperature>" + temperature + "</target_temperature>",
        contentType: "xml",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
        },
    });
}

function getTargetTemperature() {
    return $.ajax({
        async: false,
        url: serverPath + id + "targetTemperature",
        type: "GET",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
            targetTemperature = $(xhr.responseXML).text();
        },
    });
}

// Day Temperature
function setDayTemperature(temperature) {
    dayTemperature = temperature.toString();
    
    $.ajax({
        url: serverPath + id + "dayTemperature",
        type: "PUT",
        data: "<day_temperature>" + temperature + "</day_temperature>",
        contentType: "xml",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
        },
    });
}

function getDayTemperature() {
    $.ajax({
        url: serverPath + id + "dayTemperature",
        type: "GET",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
            dayTemperature = $(xhr.responseXML).text();
        },
    });
}

// Night Temperature
function setNightTemperature(temperature) {
    nightTemperature = temperature.toString();
    
    $.ajax({
        url: serverPath + id + "nightTemperature",
        type: "PUT",
        data: "<night_temperature>" + temperature + "</night_temperature>",
        contentType: "xml",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
        },
    });
}

function getNightTemperature() {
    $.ajax({
        url: serverPath + id + "nightTemperature",
        type: "GET",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
            nightTemperature = $(xhr.responseXML).text();
        },
    });
}

// Week Program State
function setWeekProgramState(state) {
    weekProgramState = state;
    
    $.ajax({
        url: serverPath + id + "weekProgramState",
        type: "PUT",
        data: "<week_program_state>" + state + "</week_program_state>",
        contentType: "xml",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
        },
    });
}

function getWeekProgramState() {
    $.ajax({
        url: serverPath + id + "weekProgramState",
        type: "GET",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
            weekProgramState = $(xhr.responseXML).text();
        },
    });
}

// Week Program
function setWeekProgram(program) {
    weekProgram = program;
    
    $.ajax({
        url : serverPath + id + "weekProgram",
        type : "PUT",
        data: program,
        contentType: "xml",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
        },
    });
}

function getWeekProgram() {
    $.ajax({
        url : serverPath + id + "weekProgram",
        type : "GET",
        complete: function(xhr, status) {
            $("#error-code").text(xhr.status + " " + xhr.statusText);
            $("#response").text(xhr.responseText);
            weekProgram = xhr.responseText;
        },
    });
}
