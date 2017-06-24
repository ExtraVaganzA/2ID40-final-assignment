// Set local storage variables if this is the first visit.
if (localStorage.welcomeHint === undefined) {
    localStorage.welcomeHint = true;
}

// Element Manipulation
if (localStorage.welcomeHint === "false") {
    $("#welcome-card").hide();
}

// Click Functions
$("#welcome-card .close").click(function(){
    $("#welcome-card").hide();
});

$("#welcome-card .delete").click(function(){
    localStorage.welcomeHint = false;
    $("#welcome-card").hide();
});

