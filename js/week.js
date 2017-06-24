
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
