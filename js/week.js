// Set local storage variables if this is the first visit.
if (localStorage.welcomeHintWeek === undefined) {
    localStorage.welcomeHintWeek = true;
}

// Element Manipulation
if (localStorage.welcomeHintWeek == "false") {
    $("#welcome-card-week").hide();
}

// Click Functions
$("#welcome-card-week .close").click(function(){
    $("#welcome-card-week").hide();
});

$("#welcome-card-week .delete").click(function(){
    localStorage.welcomeHintWeek = false;
    $("#welcome-card-week").hide();
});

