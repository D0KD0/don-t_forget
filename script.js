// current date information for subject
var today = moment().format("ddd, MMM DD, YYYY");
$("#currentDay").text(today);


// set up start time
var hour = $('.hour');
var startTime = 8;

for (var i=0; i<hour.length; i++) {
    if (startTime<12) {
        hour[i].innerHTML = startTime + ':00';
        startTime += 1;
        console.log(startTime);
    } else if (startTime ===12) {
        hour[i].innerHTML = startTime + ':00';
        startTime += 1;
        console.log(startTime);      
    } else if (startTime>12) {
        hour[i].innerHTML = startTime + ':00';
        startTime += 1;
        console.log(startTime);
    }
}

// colour coding per hour
var currentTime = parseInt(moment().format("H"));
    console.log(currentTime);

    for (var i=0; i<hour.length; i++) {
        var blockTime = parseInt(hour[i].innerHTML);
        var blockId =  $('#'+(i+8))
        
        if (blockTime == currentTime) {
           blockId.addClass("present");
        } else if (blockTime > currentTime) {
            blockId.removeClass("present");
            blockId.addClass("future");
        } else if (blockTime < currentTime) {
            blockId.removeClass("present");
            blockId.addClass("past");
        }
    }

// save events to local storage
var savebtn = $('.saveBtn');
var textarea = $('.description');
var listobjects = [];

savebtn.click(function listsave (event) {
    event.preventDefault();
    var btnSchedule = $(event.target).prev();
    var btnTime = btnSchedule.prev();

    var listobject = listobjects[i] 
    listobject = {
        time : btnTime.text(),
        todo : btnSchedule.val()
    }

    listobjects.push(listobject);
    storetodo();
});

function storetodo () {
    localStorage.setItem("listobjects", JSON.stringify(listobjects));
}

function init () {
    if (lastlist !== null) {
        listobjects = lastlist;
    } else {
        return;
    }
    rendertodoList();
}

var lastlist = JSON.parse(localStorage.getItem("listobjects"));

    function rendertodoList() {
        for(var i=0; i<hour.length; i++) {
            for(var j=0; j<lastlist.length; j++){
            if(hour[i].innerHTML == lastlist[j].time) {
                textarea[i].innerHTML = lastlist[j].todo;
            }
        }}
    };
    
init();
