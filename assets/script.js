window.onload = function () {

    let now = moment();
    let day = moment().format("MMMM DD YYYY");
    let hour = moment().format("HH");
    timeArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    console.log(now);
    console.log(hour);

    // display current date in Jumbotron
    document.getElementById("currentDay").innerHTML = day;

    // change colors to reflect past, present, and future
    function colors() {
        for (i = 0; i < timeArray.length; i++) {
            if (hour < timeArray[i]) {
                document.querySelector(".description").setAttribute("class", "past");
                console.log("past");

            } else if (hour > timeArray[i]) {
                document.querySelector(".description").setAttribute("class", "future");
                console.log("future");

            } else if (hour === timeArray[i]) {
                document.querySelector(".description").setAttribute("class", "present");
                console.log("present");

            };
        };
    };
    colors();
    // save textarea events to local storage

    


    }


























