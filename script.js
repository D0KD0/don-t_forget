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


// set up color assign per time
var currentTime = moment().format("H");
    console.log(currentTime);

    if (startTime === currentTime) {
        $('.description').addClass("present");
        $('.description').removeClass("future", "past");
        console.log(startTime === currentTime);
    } else if (startTime > currentTime) {
        $('.description').addClass("future");
        $('.description').removeClass("present", "past");
    } else if (startTime < currentTime) {
        $('.description').addClass("past");
        $('.description').removeClass("present", "future");
    }

// save events at local storage
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

function initiateBeforeRender () {
    if (lastlist !== null) {
        listobjects = lastlist;
    } else {
        return;
    }
    rendertodoList();
}



