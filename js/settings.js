
// Element Manipulation
if (localStorage.settingsHint == "false") {
    $("#hint-card").hide();
}

// Click Functions
$("#hint-card .close").click(function(){
    $("#hint-card").hide();
});

$("#hint-card .delete").click(function(){
    localStorage.settingsHint = false;
    $("#hint-card").hide();
});

$("#reset-hints-button").click(function(){
    $("#confirmation-dialog")[0].showModal();
});

$("#confirmation-dialog .no").click(function() {
    $("#confirmation-dialog")[0].close();
});

$("#confirmation-dialog .yes").click(function() {
    localStorage.removeItem("welcomeHint");
    localStorage.removeItem("vacationModeHint");
    localStorage.removeItem("settingsHint");
    $("#confirmation-dialog")[0].close();
});

$("#open-temp-unit").click(function(){
    $("#temp-unit")[0].showModal();
});

$("#temp-unit .ok").click(function() {
    $("#temp-unit")[0].close();
});

$("#open-threshold").click(function() {
	$("#threshold")[0].showModal();
});

$("#threshold").click(function() {
	$("#threshold")[0].close();
});