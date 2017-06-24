// By default: hide all switches of all days
$(".daysOfWeek").hide();
$(".switchDefault").hide();

// On click on monday, close all (possibly) opened days
// Show the card if it was hidden before, otherwise close it
$("#monday").on("click",function(){
    // Show if closed
    if (document.getElementById("mondaySwitches").style.display === 'none') {
        $(".daysOfWeek").hide();
        $("#mondaySwitches").toggle();
    }
    // And close if shown
    else if (document.getElementById("mondaySwitches").style.display !== 'none') {
        $(".daysOfWeek").hide();
    }
});

$("#tuesday").on("click",function(){
    if (document.getElementById("tuesdaySwitches").style.display === 'none') {
        $(".daysOfWeek").hide();
        $("#tuesdaySwitches").toggle();
    }
    else if (document.getElementById("tuesdaySwitches").style.display !== 'none') {
        $(".daysOfWeek").hide();
    }
});

$("#wednesday").on("click",function(){
    if (document.getElementById("wednesdaySwitches").style.display === 'none') {
        $(".daysOfWeek").hide();
        $("#wednesdaySwitches").toggle();
    }
    else if (document.getElementById("wednesdaySwitches").style.display !== 'none') {
        $(".daysOfWeek").hide();
    }
});

$("#thursday").on("click",function(){
    if (document.getElementById("thursdaySwitches").style.display === 'none') {
        $(".daysOfWeek").hide();
        $("#thursdaySwitches").toggle();
    }
    else if (document.getElementById("thursdaySwitches").style.display !== 'none') {
        $(".daysOfWeek").hide();
    }
});

$("#friday").on("click",function(){
    if (document.getElementById("fridaySwitches").style.display === 'none') {
        $(".daysOfWeek").hide();
        $("#fridaySwitches").toggle();
    }
    else if (document.getElementById("fridaySwitches").style.display !== 'none') {
        $(".daysOfWeek").hide();
    }
});

$("#saturday").on("click",function(){
    if (document.getElementById("saturdaySwitches").style.display === 'none') {
        $(".daysOfWeek").hide();
        $("#saturdaySwitches").toggle();
    }
    else if (document.getElementById("saturdaySwitches").style.display !== 'none') {
        $(".daysOfWeek").hide();
    }
});

$("#sunday").on("click",function(){
    if (document.getElementById("sundaySwitches").style.display === 'none') {
        $(".daysOfWeek").hide();
        $("#sundaySwitches").toggle();
    }
    else if (document.getElementById("sundaySwitches").style.display !== 'none') {
        $(".daysOfWeek").hide();
    }
});

$("#addSwitch").on("click",function(){
    $("#switches").toggle();
});

// Set local storage variables if this is the first visit.
if (localStorage.welcomeHintSwitches === undefined) {
    localStorage.welcomeHintSwitches = true;
}

// Element Manipulation
if (localStorage.welcomeHintSwitches === "false") {
    $("#welcome-card-switches").hide();
}

// Click Functions
$("#welcome-card-switches .close").click(function(){
    $("#welcome-card-switches").hide();
});

$("#welcome-card-switches .delete").click(function(){
    localStorage.welcomeHintSwitches = false;
    $("#welcome-card-switches").hide();
});

