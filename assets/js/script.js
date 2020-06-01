var events = JSON.parse(localStorage.getItem('events')) || [];
var today = moment();
//set currentday
var currentDay = function(){
    var day = moment().format("dddd, MMMM Do");
    $("#currentDay").text(day);
}
var loadEvents = function(i, event){
    var id = event.hour.slice(0,2);
    $("#time-"+id).text(event.text);
}
var refreshPage = function() {
    // loop over object properties
    $.each(events, function (i, event) {
        loadEvents(i, event);
    });
    return false;
} 
//when a save button is clicked
$(".btn").on("click", function(event){
    event.preventDefault();
    eventOb = {
        text: $(this).prev().val().trim(),
        hour: $(this).closest(".time-block").text().trim()
    }
    events.push(eventOb)
    console.log(events)
    localStorage.setItem('events', JSON.stringify(events))
});
currentDay();
refreshPage();