//set currentday
var currentday = function(){
    var day = moment().format("dddd, MMMM Do");
    $("#currentDay").text(day);
}
currentday();