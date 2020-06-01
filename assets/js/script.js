//array of objects from all events saved in localStorage
var events = JSON.parse(localStorage.getItem('events')) || [];
//set currentday
var currentDay = function(){
    var day = moment().format("dddd, MMMM Do");
    $("#currentDay").text(day);
}
//check the status of every event if is past, present or future
var colorCoded = function(){
    var hour = moment().hour();
    console.log(hour);
    for(var i=9; i<=17; i++){
        if(i<=12){
            if(moment(i).isAfter(hour)){
                 $("#time-"+i).addClass("future");
            }else if(moment(i).isBefore(hour)){
                 $("#time-"+i).addClass("past"); 
            }else {
                $("#time-"+i).addClass("present");
            }
        }else if(i>12) {
            if(i===13){
                if(moment(i).isAfter(hour)){
                     $("#time-1").addClass("future");
                }else if(moment(i).isBefore(hour)){
                     $("#time-1").addClass("past"); 
                }else {
                    $("#time-1").addClass("present");
                }
            } else if(i===14){
                if(moment(i).isAfter(hour)){
                     $("#time-2").addClass("future");
                }else if(moment(i).isBefore(hour)){
                     $("#time-2").addClass("past"); 
                }else {
                    $("#time-2").addClass("present");
                }
            }else if(i===15){
                if(moment(i).isAfter(hour)){
                     $("#time-3").addClass("future");
                }else if(moment(i).isBefore(hour)){
                     $("#time-3").addClass("past"); 
                }else {
                    $("#time-3").addClass("present");
                }
            }else if(i===16){
                if(moment(i).isAfter(hour)){
                     $("#time-4").addClass("future");
                }else if(moment(i).isBefore(hour)){
                     $("#time-4").addClass("past"); 
                }else {
                    $("#time-4").addClass("present");
                }
            }else if(i===17){
                if(moment(i).isAfter(hour)){
                     $("#time-5").addClass("future");
                }else if(moment(i).isBefore(hour)){
                     $("#time-5").addClass("past"); 
                }else {
                    $("#time-5").addClass("present");
                }
            }
        }
    }
}
//function to load on page all events saved in localStorage
var loadEvents = function(i, event){
    var id = event.hour.slice(0,2);
    $("#time-"+id).text(event.text);
}
//function to search for every event saved in localStorage
var refreshPage = function() {
    // loop over object properties
    $.each(events, function (i, event) {
        loadEvents(i, event);
    });
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
    refreshPage();
});
currentDay();
refreshPage();
colorCoded();
//check every half hour the color-coded function
setInterval(function () {colorCoded() }, (1000 * 60) * 30);