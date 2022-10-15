// current date information for subject
var today = moment().format("ddd, MMM DD, YYYY");
$("#currentDay").text(today);


// set up start time
var hour = $('.hour');
var time = 8;

for (var i=0; i<hour.length; i++) {
    if (time<12) {
        hour[i].innerHTML = time + ':00';
        time += 1;
    } else if (time ===12) {
        hour[i].innerHTML = time + ':00';
        time += 1;
    } else if (time>12) {
        hour[i].innerHTML = time + ':00';
        time += 1;
    }
}

var timeBlock = $(".hour");
var currentTime = moment().format("H");
    console.log(currentTime);

$.each(timeBlock, function (i,hour) {
    var time = parseInt($(this).attr("id"));
    if (time === currentTime) {
        $(this).next().addClass("present");
    } else if (time > currentTime) {
        $(this).next().addClass("future");
    } else if (time < currentTime) {
        $(this).next().addClass("past");
    }
});


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



