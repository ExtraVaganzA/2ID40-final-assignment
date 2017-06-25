
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

function updateButtons() {
    if ($("#monday-card tr").length >= 6) {
        $("#monday-card .add")[0].MaterialButton.disable();
        $(".day-table .mdl-checkbox").has("#monday-checkbox")[0].MaterialCheckbox.disable();
    } else {
        $("#monday-card .add")[0].MaterialButton.enable();
        $(".day-table .mdl-checkbox").has("#monday-checkbox")[0].MaterialCheckbox.enable();
    }
    
    if ($("#tuesday-card tr").length >= 6) {
        $("#tuesday-card .add")[0].MaterialButton.disable();
        $(".day-table .mdl-checkbox").has("#tuesday-checkbox")[0].MaterialCheckbox.disable();
    } else {
        $("#tuesday-card .add")[0].MaterialButton.enable();
        $(".day-table .mdl-checkbox").has("#tuesday-checkbox")[0].MaterialCheckbox.enable();
    }
    
    if ($("#wednesday-card tr").length >= 6) {
        $("#wednesday-card .add")[0].MaterialButton.disable();
        $(".day-table .mdl-checkbox").has("#wednesday-checkbox")[0].MaterialCheckbox.disable();
    } else {
        $("#wednesday-card .add")[0].MaterialButton.enable();
        $(".day-table .mdl-checkbox").has("#wednesday-checkbox")[0].MaterialCheckbox.enable();
    }
    
    if ($("#thursday-card tr").length >= 6) {
        $("#thursday-card .add")[0].MaterialButton.disable();
        $(".day-table .mdl-checkbox").has("#thursday-checkbox")[0].MaterialCheckbox.disable();
    } else {
        $("#thursday-card .add")[0].MaterialButton.enable();
        $(".day-table .mdl-checkbox").has("#thursday-checkbox")[0].MaterialCheckbox.enable();
    }
    
    if ($("#friday-card tr").length >= 6) {
        $("#friday-card .add")[0].MaterialButton.disable();
        $(".day-table .mdl-checkbox").has("#friday-checkbox")[0].MaterialCheckbox.disable();
    } else {
        $("#friday-card .add")[0].MaterialButton.enable();
        $(".day-table .mdl-checkbox").has("#friday-checkbox")[0].MaterialCheckbox.enable();
    }
    
    if ($("#saturday-card tr").length >= 6) {
        $("#saturday-card .add")[0].MaterialButton.disable();
        $(".day-table .mdl-checkbox").has("#saturday-checkbox")[0].MaterialCheckbox.disable();
    } else {
        $("#saturday-card .add")[0].MaterialButton.enable();
        $(".day-table .mdl-checkbox").has("#saturday-checkbox")[0].MaterialCheckbox.enable();
    }
    
    if ($("#sunday-card tr").length >= 6) {
        $("#sunday-card .add")[0].MaterialButton.disable();
        $(".day-table .mdl-checkbox").has("#sunday-checkbox")[0].MaterialCheckbox.disable();
    } else {
        $("#sunday-card .add")[0].MaterialButton.enable();
        $(".day-table .mdl-checkbox").has("#sunday-checkbox")[0].MaterialCheckbox.enable();
    }
}

// Program Control
function setProgram(errCode, respRaw, respText) {
    $("tr").has(".remove").remove();
    
    var xml = $.parseXML(respRaw);
    var dayNames = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    var dayList = $(xml).find("day");
    
    for (var i = 0; i < 7; i++) {
        var daySwitches = dayList.eq(i).find("switch[type='day'][state='on']");
        var nightSwitches = dayList.eq(i).find("switch[type='night'][state='on']");
        
        var switchNumber = daySwitches.length < nightSwitches.length ? daySwitches.length : nightSwitches.length;
        
        for (var j = 0; j < switchNumber; j++) {
            addSwitch(dayNames[i], daySwitches.eq(j).text(), nightSwitches.eq(j).text());
        }
    }
    
    updateButtons();
}

function getProgram() {
    var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    var output = "<week_program state='on'>";
    
    for(var i = 0; i < 7; i++) {
        output += "<day name='" + dayNames[i] + "'>";
        
        var switchList = $(".switches:eq(" + i + ") tr:has(.remove)");
        
        for(var j = 0; j < switchList.length; j++) {
            var startTime = switchList.eq(j).find("td:eq(0)").text();
            var endTime = switchList.eq(j).find("td:eq(1)").text();
            
            output +=
                "<switch type='day' state='on'>" +
                    startTime +
                "</switch>" +
                "<switch type='night' state='on'>" +
                    endTime +
                "</switch>";
        }
        
        for(var j = 0; j < 5 - switchList.length; j++) {
            output +=
                "<switch type='day' state='off'>" +
                    "00:00" +
                "</switch>" +
                "<switch type='night' state='off'>" +
                    "00:00" +
                "</switch>";
        }
        
        output += "</day>";
    }
    
    output += "</week_program>";
    
    return output;
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
    
    updateButtons();
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
    
    updateButtons();
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
    
    updateButtons();
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
    
    updateButtons();
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
    
    updateButtons();
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
    
    updateButtons();
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
    
    updateButtons();
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
    
    if($("#switch-card #monday-checkbox").prop("checked") && 
            !$("#switch-card #monday-checkbox").prop("disabled")) {
        addSwitch("monday", startTime, endTime);
    }
    
    if($("#switch-card #tuesday-checkbox").prop("checked") && 
            !$("#switch-card #tuesday-checkbox").prop("disabled")) {
        addSwitch("tuesday", startTime, endTime);
    }
    
    if($("#switch-card #wednesday-checkbox").prop("checked") && 
            !$("#switch-card #wednesday-checkbox").prop("disabled")) {
        addSwitch("wednesday", startTime, endTime);
    }
    
    if($("#switch-card #thursday-checkbox").prop("checked") && 
            !$("#switch-card #thursday-checkbox").prop("disabled")) {
        addSwitch("thursday", startTime, endTime);
    }
    
    if($("#switch-card #friday-checkbox").prop("checked") && 
            !$("#switch-card #friday-checkbox").prop("disabled")) {
        addSwitch("friday", startTime, endTime);
    }
    
    if($("#switch-card #saturday-checkbox").prop("checked") && 
            !$("#switch-card #saturday-checkbox").prop("disabled")) {
        addSwitch("saturday", startTime, endTime);
    }
    
    if($("#switch-card #sunday-checkbox").prop("checked") && 
            !$("#switch-card #sunday-checkbox").prop("disabled")) {
        addSwitch("sunday", startTime, endTime);
    }
    
    updateButtons();
});


$(document).on("click", "tr .remove", function(){
    $("tr").has(this).remove();
    
    updateButtons();
});


$("#file-menu .save").click(function() {
    $("#save-dialog")[0].showModal();
});

$("#file-menu .load").click(function() {
    $("#load-dialog")[0].showModal();
});

$("#file-menu .download").click(function() {
    $("#download-dialog")[0].showModal();
});

$("#file-menu .upload").click(function() {
    $("#upload-dialog")[0].showModal();
});


$("#save-dialog .no").click(function() {
    $("#save-dialog")[0].close();
});

$("#save-dialog .yes").click(function() {
    localStorage.weekProgram = getProgram();
    localStorage.weekProgramState = "on";
    localStorage.lastState = "on";
    
    $("#save-dialog")[0].close();
});


$("#load-dialog .no").click(function() {
    $("#load-dialog")[0].close();
});

$("#load-dialog .yes").click(function() {
    setProgram("", localStorage.weekProgram, "");
    
    $("#load-dialog")[0].close();
});


$("#download-dialog .no").click(function() {
    $("#download-dialog")[0].close();
});

$("#download-dialog .yes").click(function() {
    getWeekProgram("setProgram");
    
    $("#download-dialog")[0].close();
});


$("#upload-dialog .no").click(function() {
    $("#upload-dialog")[0].close();
});

$("#upload-dialog .yes").click(function() {
    setWeekProgram(getProgram());
    
    $("#upload-dialog")[0].close();
});
