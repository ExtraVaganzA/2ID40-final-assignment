
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
    $("#confirmation-dialog")[0].showModal();
});

$("#confirmation-dialog .no").click(function() {
    $("#confirmation-dialog")[0].close();
});

function setHints(flag = "true") {
    localStorage.setItem("homeHint", flag);
    localStorage.setItem("vacationHint", flag);
    localStorage.setItem("weekHint", flag);
    localStorage.setItem("faqHint", flag);
    localStorage.setItem("settingsHint", flag);
}

$("#confirmation-dialog .yes").click(function() {
    localStorage.removeItem("homeHint");
    localStorage.removeItem("vacationHint");
    localStorage.removeItem("weekHint");
    localStorage.removeItem("faqHint");
    localStorage.removeItem("settingsHint");
	localStorage.removeItem("welcomeHintFAQ");
	localStorage.removeItem("welcomeHintSwitches");
	localStorage.removeItem("welcomeHintWeek");
	
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