var eventsArray = [
    {
        id : 9,
        text: "",
    },
    {
        id : 10,
        text: "",
    },
    {
        id : 11,
        text: "",
    },
    {
        id : 12,
        text: "",
    },
    {
        id : 13,
        text: "",
    },
    {
        id : 14,
        text: "",
    },
    {
        id : 15,
        text: "",
    },
    {
        id : 16,
        text: "",
    },
    {
        id : 17,
        text: "",
    },

];
var today = moment();
console.log(today);
//set currentday
var currentDay = function(){
    var day = moment().format("dddd, MMMM Do");
    $("#currentDay").text(day);
}
//get event
$(".time-block").on("change", ".description", function (){
    var descriptiom = $(this)
    .val()
    .trim();
    console.log(description);
});
currentDay();