
// Element Manipulation
if (localStorage.weekHint == "false") {
    $("#hint-card").hide();
}

$(".switches").hide();

// Click Functions
$("#hint-card .close").click(function(){
    $("#hint-card").hide();
});

$("#hint-card .delete").click(function(){
    localStorage.weekHint = "false";
    $("#hint-card").hide();
});

$("#monday-card .mdl-card__title").click(function(){
    $(".switches").not("#monday-card .switches").hide();
    $("#monday-card .switches").toggle();
});

$("#tuesday-card .mdl-card__title").click(function(){
    $(".switches").not("#tuesday-card .switches").hide();
    $("#tuesday-card .switches").toggle();
});

$("#wednesday-card .mdl-card__title").click(function(){
    $(".switches").not("#wednesday-card .switches").hide();
    $("#wednesday-card .switches").toggle();
});

$("#thursday-card .mdl-card__title").click(function(){
    $(".switches").not("#thursday-card .switches").hide();
    $("#thursday-card .switches").toggle();
});

$("#friday-card .mdl-card__title").click(function(){
    $(".switches").not("#friday-card .switches").hide();
    $("#friday-card .switches").toggle();
});

$("#saturday-card .mdl-card__title").click(function(){
    $(".switches").not("#saturday-card .switches").hide();
    $("#saturday-card .switches").toggle();
});

$("#sunday-card .mdl-card__title").click(function(){
    $(".switches").not("#sunday-card .switches").hide();
    $("#sunday-card .switches").toggle();
});

// Switch Control
function validateInput(startTimeSelector, endTimeSelector) {
    if ($(startTimeSelector + " input").val() == "") {
        alert("Please enter the start time.");
        return false;
    }
    
    if ($(endTimeSelector + " input").val() == "") {
        alert("Please enter the end time.");
        return false;
    }
    
    if ($(startTimeSelector).hasClass("is-invalid")) {
        alert("The start time is invalid.");
        return false;
    }
    
    if ($(endTimeSelector).hasClass("is-invalid")) {
        alert("The end time is invalid.");
        return false;
    }
    
    return true;
}

function addSwitch(day, startTime, endTime) {
    $("#" + day + "-card tr:last").before(
        "<tr>" +
            "<td>" +
                startTime +
            "</td>" +
            "<td>" +
                endTime +
            "</td>" +
            "<td>" +
                "<button class='mdl-button mdl-js-button mdl-button--icon mdl-button--colored remove'>" +
                    "<i class='material-icons'>" +
                        "remove_circle" +
                    "</i>" +
                "</button>" +
            "</td>" +
        "</tr>"
    );
}

$("#monday-card .add").click(function(){
    if (!validateInput("#monday-card .start-time", "#monday-card .end-time")) {
        return;
    }
    
    var startTime = $("#monday-card .start-time input").val();
    var endTime = $("#monday-card .end-time input").val();
    
    $("#monday-card .start-time")[0].MaterialTextfield.change("");
    $("#monday-card .end-time")[0].MaterialTextfield.change("");
    
    addSwitch("monday", startTime, endTime);
});

$(document).on("click", "tr .remove", function(){
    $("tr").has(this).remove();
});
