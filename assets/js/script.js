var eventsArray = JSON.parse(localStorage.getItem('event')) || [];

var today = moment();
//set currentday
var currentDay = function(){
    var day = moment().format("dddd, MMMM Do");
    $("#currentDay").text(day);
}
var saveEvent = function(eventOb) {
    console.log(eventOb);
} 
//when a save button is clicked
$(".btn").on("click", function(event){
    event.preventDefault();
    eventOb = {
        text: $(this).prev().val().trim(),
        hour: $(this).closest(".time-block").text().trim()
    }
    eventsArray.push(eventOb)
    console.log(eventsArray)
    saveEvent(eventOb);
    localStorage.setItem('event', JSON.stringify(eventsArray))
});
currentDay();