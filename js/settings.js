
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