
// Element Manipulation
if (localStorage.settingsHint == "false") {
    $("#hint-card").hide();
}

// Click Functions
$("#hint-card .close").click(function(){
    $("#hint-card").hide();
});

$("#hint-card .delete").click(function(){
    localStorage.settingsHint = "false";
    $("#hint-card").hide();
});


$("#hint-control-card .enable").click(function(){
    $("#hint-enable-dialog")[0].showModal();
});

$("#hint-control-card .disable").click(function(){
    $("#hint-disable-dialog")[0].showModal();
});


$("#hint-enable-dialog .no").click(function() {
    $("#hint-enable-dialog")[0].close();
});

$("#hint-enable-dialog .yes").click(function() {
    localStorage.removeItem("homeHint");
    localStorage.removeItem("vacationHint");
    localStorage.removeItem("weekHint");
    localStorage.removeItem("faqHint");
    localStorage.removeItem("settingsHint");
	
    $("#hint-enable-dialog")[0].close();
});


$("#hint-disable-dialog .no").click(function() {
    $("#hint-disable-dialog")[0].close();
});

$("#hint-disable-dialog .yes").click(function() {
    localStorage.homeHint = "false";
    localStorage.vacationHint = "false";
    localStorage.weekHint = "false";
    localStorage.faqHint = "false";
    localStorage.settingsHint = "false";
	
    $("#hint-disable-dialog")[0].close();
});
