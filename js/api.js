
//   Constants
const serverPath = "http://wwwis.win.tue.nl/2id40-ws/";
const id = "26/";

// Functions
// Thermostat
function setThermostat(respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id,
        type: "PUT",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
        },
    });
}

function getThermostat(funcName) {
    $.ajax({
        url : serverPath + id,
        type : "GET",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[funcName](errCode, respRaw, respText);
        },
    });
}

function deleteThermostat(respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url : serverPath + id,
        type : "DELETE",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
        },
    });
}

// Day
function setDay(day, respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "day",
        type: "PUT",
        data: "<current_day>" + day + "</current_day>",
        contentType: "xml",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
        },
    });
}

function getDay(respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "day",
        type: "GET",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
            localStorage.day = $(xhr.responseXML).text();
        },
    });
}

// Time
function setTime(time, respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "time",
        type: "PUT",
        data: "<time>" + time + "</time>",
        contentType: "xml",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
        },
    });
}

function getTime(respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "time",
        type: "GET",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
            localStorage.time = $(xhr.responseXML).text();
        },
    });
}

// Current Temperature
function setCurrentTemperature(temperature, respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "currentTemperature",
        type: "PUT",
        data: "<current_temperature>" + temperature + "</current_temperature>",
        contentType: "xml",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
        },
    });
}

function getCurrentTemperature(respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "currentTemperature",
        type: "GET",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
            localStorage.currentTemperature = $(xhr.responseXML).text();
        },
    });
}

// Target Temperature
function setTargetTemperature(temperature, respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "targetTemperature",
        type: "PUT",
        data: "<target_temperature>" + temperature + "</target_temperature>",
        contentType: "xml",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
        },
    });
}

function getTargetTemperature(respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "targetTemperature",
        type: "GET",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
            localStorage.targetTemperature = $(xhr.responseXML).text();
        },
    });
}

// Day Temperature
function setDayTemperature(temperature, respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "dayTemperature",
        type: "PUT",
        data: "<day_temperature>" + temperature + "</day_temperature>",
        contentType: "xml",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
        },
    });
}

function getDayTemperature(respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "dayTemperature",
        type: "GET",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
            localStorage.dayTemperature = $(xhr.responseXML).text();
        },
    });
}

// Night Temperature
function setNightTemperature(temperature, respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "nightTemperature",
        type: "PUT",
        data: "<night_temperature>" + temperature + "</night_temperature>",
        contentType: "xml",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
        },
    });
}

function getNightTemperature(respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "nightTemperature",
        type: "GET",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
            localStorage.nightTemperature = $(xhr.responseXML).text();
        },
    });
}

// Week Program State
function setWeekProgramState(state, respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "weekProgramState",
        type: "PUT",
        data: "<week_program_state>" + state + "</week_program_state>",
        contentType: "xml",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
        },
    });
}

function getWeekProgramState(respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url: serverPath + id + "weekProgramState",
        type: "GET",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
            localStorage.weekProgramState = $(xhr.responseXML).text();
        },
    });
}

// Week Program
function setWeekProgram(program, respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url : serverPath + id + "weekProgram",
        type : "PUT",
        data: program,
        contentType: "xml",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
        },
    });
}

function getWeekProgram(respText = "#response-text", respRaw = "#response-raw", errCode = "#error-code") {
    $.ajax({
        url : serverPath + id + "weekProgram",
        type : "GET",
        complete: function(xhr, status) {
            $(errCode).text("(" + xhr.status + ") " + xhr.statusText);
            $(respRaw).text(xhr.responseText);
            $(respText).text($(xhr.responseXML).text());
            localStorage.weekProgram = xhr.responseText;
        },
    });
}
