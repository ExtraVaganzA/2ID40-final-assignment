
//   Constants
const serverPath = "http://wwwis.win.tue.nl/2id40-ws/";
const id = "26/";

// Functions
// Thermostat
function setThermostat(callback = "") {
    $.ajax({
        url: serverPath + id,
        type: "PUT",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

function getThermostat(callback = "") {
    $.ajax({
        url : serverPath + id,
        type : "GET",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

function deleteThermostat(callback = "") {
    $.ajax({
        url : serverPath + id,
        type : "DELETE",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

// Day
function setDay(day, callback = "") {
    $.ajax({
        url: serverPath + id + "day",
        type: "PUT",
        data: "<current_day>" + day + "</current_day>",
        contentType: "xml",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

function getDay(callback = "") {
    $.ajax({
        url: serverPath + id + "day",
        type: "GET",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

// Time
function setTime(time, callback = "") {
    $.ajax({
        url: serverPath + id + "time",
        type: "PUT",
        data: "<time>" + time + "</time>",
        contentType: "xml",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

function getTime(callback = "") {
    $.ajax({
        url: serverPath + id + "time",
        type: "GET",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

// Current Temperature
function setCurrentTemperature(temperature, callback = "") {
    $.ajax({
        url: serverPath + id + "currentTemperature",
        type: "PUT",
        data: "<current_temperature>" + temperature + "</current_temperature>",
        contentType: "xml",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

function getCurrentTemperature(callback = "") {
    $.ajax({
        url: serverPath + id + "currentTemperature",
        type: "GET",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

// Target Temperature
function setTargetTemperature(temperature, callback = "") {
    $.ajax({
        url: serverPath + id + "targetTemperature",
        type: "PUT",
        data: "<target_temperature>" + temperature + "</target_temperature>",
        contentType: "xml",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

function getTargetTemperature(callback = "") {
    $.ajax({
        url: serverPath + id + "targetTemperature",
        type: "GET",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

// Day Temperature
function setDayTemperature(temperature, callback = "") {
    $.ajax({
        url: serverPath + id + "dayTemperature",
        type: "PUT",
        data: "<day_temperature>" + temperature + "</day_temperature>",
        contentType: "xml",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

function getDayTemperature(callback = "") {
    $.ajax({
        url: serverPath + id + "dayTemperature",
        type: "GET",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

// Night Temperature
function setNightTemperature(temperature, callback = "") {
    $.ajax({
        url: serverPath + id + "nightTemperature",
        type: "PUT",
        data: "<night_temperature>" + temperature + "</night_temperature>",
        contentType: "xml",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

function getNightTemperature(callback = "") {
    $.ajax({
        url: serverPath + id + "nightTemperature",
        type: "GET",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

// Week Program State
function setWeekProgramState(state, callback = "") {
    $.ajax({
        url: serverPath + id + "weekProgramState",
        type: "PUT",
        data: "<week_program_state>" + state + "</week_program_state>",
        contentType: "xml",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

function getWeekProgramState(callback = "") {
    $.ajax({
        url: serverPath + id + "weekProgramState",
        type: "GET",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

// Week Program
function setWeekProgram(program, callback = "") {
    $.ajax({
        url : serverPath + id + "weekProgram",
        type : "PUT",
        data: program,
        contentType: "xml",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}

function getWeekProgram(callback = "") {
    $.ajax({
        url : serverPath + id + "weekProgram",
        type : "GET",
        complete: function(xhr, status) {
            var errCode = "(" + xhr.status + ") " + xhr.statusText;
            var respRaw = xhr.responseText;
            var respText = $(xhr.responseXML).text();
            window[callback](errCode, respRaw, respText);
        },
    });
}
