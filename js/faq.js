// By default: hide all answers
$(".answers").hide();

// On click on question 1, close the (possibly) opened answer
// Show the card with the answer if it was hidden before, otherwise close it

$("#q1").on("click",function(){
	
    // Show if closed
    if (document.getElementById("a1").style.display === 'none') {
        $(".answers").hide();
        $("#a1").toggle();
    }
    // And close if shown
    else if (document.getElementById("a1").style.display !== 'none') {
        $(".answers").hide();
    }
});

$("#q2").on("click",function(){
    // Show if closed
    if (document.getElementById("a2").style.display === 'none') {
        $(".answers").hide();
        $("#a2").toggle();
    }
    // And close if shown
    else if (document.getElementById("a2").style.display !== 'none') {
        $(".answers").hide();
    }
});

$("#q3").on("click",function(){
    // Show if closed
    if (document.getElementById("a3").style.display === 'none') {
        $(".answers").hide();
        $("#a3").toggle();
    }
    // And close if shown
    else if (document.getElementById("a3").style.display !== 'none') {
        $(".answers").hide();
    }
});

$("#q4").on("click",function(){
    // Show if closed
    if (document.getElementById("a4").style.display === 'none') {
        $(".answers").hide();
        $("#a4").toggle();
    }
    // And close if shown
    else if (document.getElementById("a4").style.display !== 'none') {
        $(".answers").hide();
    }
});

// Element Manipulation
if (localStorage.faqHint === "false") {
    $("#hint-card").hide();
}

// Click Functions
$("#hint-card .close").click(function(){
    $("#hint-card").hide();
});

$("#hint-card .delete").click(function(){
    localStorage.faqHint = "false";
    $("#hint-card").hide();
});

