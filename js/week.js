
// Element Manipulation
if (localStorage.weekHint == "false") {
    $("#hint-card").hide();
}

$(".switches").hide();

// Switch Control
function validateInput(startTimeSelector, endTimeSelector) {
    if ($(startTimeSelector + " input").val() == "") {
        //alert("Please enter the start time.");
        return false;
    }
    
    if ($(endTimeSelector + " input").val() == "") {
        //alert("Please enter the end time.");
        return false;
    }
    
    if ($(startTimeSelector).hasClass("is-invalid")) {
        //alert("The start time is invalid.");
        return false;
    }
    
    if ($(endTimeSelector).hasClass("is-invalid")) {
        //alert("The end time is invalid.");
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


$("#tuesday-card .mdl-card__title").click(function(){
    $(".switches").not("#tuesday-card .switches").hide();
    $("#tuesday-card .switches").toggle();
});

$("#tuesday-card .add").click(function(){
    if (!validateInput("#tuesday-card .start-time", "#tuesday-card .end-time")) {
        return;
    }
    
    var startTime = $("#tuesday-card .start-time input").val();
    var endTime = $("#tuesday-card .end-time input").val();
    
    $("#tuesday-card .start-time")[0].MaterialTextfield.change("");
    $("#tuesday-card .end-time")[0].MaterialTextfield.change("");
    
    addSwitch("tuesday", startTime, endTime);
});


$("#wednesday-card .mdl-card__title").click(function(){
    $(".switches").not("#wednesday-card .switches").hide();
    $("#wednesday-card .switches").toggle();
});

$("#wednesday-card .add").click(function(){
    if (!validateInput("#wednesday-card .start-time", "#wednesday-card .end-time")) {
        return;
    }
    
    var startTime = $("#wednesday-card .start-time input").val();
    var endTime = $("#wednesday-card .end-time input").val();
    
    $("#wednesday-card .start-time")[0].MaterialTextfield.change("");
    $("#wednesday-card .end-time")[0].MaterialTextfield.change("");
    
    addSwitch("wednesday", startTime, endTime);
});


$("#thursday-card .mdl-card__title").click(function(){
    $(".switches").not("#thursday-card .switches").hide();
    $("#thursday-card .switches").toggle();
});

$("#thursday-card .add").click(function(){
    if (!validateInput("#thursday-card .start-time", "#thursday-card .end-time")) {
        return;
    }
    
    var startTime = $("#thursday-card .start-time input").val();
    var endTime = $("#thursday-card .end-time input").val();
    
    $("#thursday-card .start-time")[0].MaterialTextfield.change("");
    $("#thursday-card .end-time")[0].MaterialTextfield.change("");
    
    addSwitch("thursday", startTime, endTime);
});


$("#friday-card .mdl-card__title").click(function(){
    $(".switches").not("#friday-card .switches").hide();
    $("#friday-card .switches").toggle();
});

$("#friday-card .add").click(function(){
    if (!validateInput("#friday-card .start-time", "#friday-card .end-time")) {
        return;
    }
    
    var startTime = $("#friday-card .start-time input").val();
    var endTime = $("#friday-card .end-time input").val();
    
    $("#friday-card .start-time")[0].MaterialTextfield.change("");
    $("#friday-card .end-time")[0].MaterialTextfield.change("");
    
    addSwitch("friday", startTime, endTime);
});


$("#saturday-card .mdl-card__title").click(function(){
    $(".switches").not("#saturday-card .switches").hide();
    $("#saturday-card .switches").toggle();
});

$("#saturday-card .add").click(function(){
    if (!validateInput("#saturday-card .start-time", "#saturday-card .end-time")) {
        return;
    }
    
    var startTime = $("#saturday-card .start-time input").val();
    var endTime = $("#saturday-card .end-time input").val();
    
    $("#saturday-card .start-time")[0].MaterialTextfield.change("");
    $("#saturday-card .end-time")[0].MaterialTextfield.change("");
    
    addSwitch("saturday", startTime, endTime);
});


$("#sunday-card .mdl-card__title").click(function(){
    $(".switches").not("#sunday-card .switches").hide();
    $("#sunday-card .switches").toggle();
});

$("#sunday-card .add").click(function(){
    if (!validateInput("#sunday-card .start-time", "#sunday-card .end-time")) {
        return;
    }
    
    var startTime = $("#sunday-card .start-time input").val();
    var endTime = $("#sunday-card .end-time input").val();
    
    $("#sunday-card .start-time")[0].MaterialTextfield.change("");
    $("#sunday-card .end-time")[0].MaterialTextfield.change("");
    
    addSwitch("sunday", startTime, endTime);
});


$("#switch-card .mdl-card__title").click(function(){
    $(".switches").not("#switch-card .switches").hide();
    $("#switch-card .switches").toggle();
});

$("#switch-card .add").click(function(){
    if (!validateInput("#switch-card .start-time", "#switch-card .end-time")) {
        return;
    }
    
    var startTime = $("#switch-card .start-time input").val();
    var endTime = $("#switch-card .end-time input").val();
    
    $("#switch-card .start-time")[0].MaterialTextfield.change("");
    $("#switch-card .end-time")[0].MaterialTextfield.change("");
    
    if($("#switch-card #monday-checkbox").prop("checked")) {
        addSwitch("monday", startTime, endTime);
    }
    
    if($("#switch-card #tuesday-checkbox").prop("checked")) {
        addSwitch("tuesday", startTime, endTime);
    }
    
    if($("#switch-card #wednesday-checkbox").prop("checked")) {
        addSwitch("wednesday", startTime, endTime);
    }
    
    if($("#switch-card #thursday-checkbox").prop("checked")) {
        addSwitch("thursday", startTime, endTime);
    }
    
    if($("#switch-card #friday-checkbox").prop("checked")) {
        addSwitch("friday", startTime, endTime);
    }
    
    if($("#switch-card #saturday-checkbox").prop("checked")) {
        addSwitch("saturday", startTime, endTime);
    }
    
    if($("#switch-card #sunday-checkbox").prop("checked")) {
        addSwitch("sunday", startTime, endTime);
    }
});


$(document).on("click", "tr .remove", function(){
    $("tr").has(this).remove();
});
