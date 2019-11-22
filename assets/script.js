window.onload = function () {

    let now = moment();
    let day = moment().format("MMMM DD YYYY");
    let hour = moment().format("HH");
    timeArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    console.log(hour);
    // display current date in Jumbotron
    document.getElementById("currentDay").innerHTML = day;
    // Input/set local storage
    // create a save function for EACH time box
    function save1() {
        const saveEl = document.getElementById("save1");
        saveEl.addEventListener("click", function () {
            const input = document.getElementById("event1").value;
            localStorage.setItem("event1", JSON.stringify(input));

        });
    };
    save1();
    function save2() {
        const saveEl = document.getElementById("save2");
        saveEl.addEventListener("click", function () {
            const input = document.getElementById("event2").value;
            localStorage.setItem("event2", JSON.stringify(input));

        });
    };
    save2();
    function save3() {
        const saveEl = document.getElementById("save3");
        saveEl.addEventListener("click", function () {
            const input = document.getElementById("event3").value;
            localStorage.setItem("event3", JSON.stringify(input));

        });
    };
    save3();
    function save4() {
        const saveEl = document.getElementById("save4");
        saveEl.addEventListener("click", function () {
            const input = document.getElementById("event4").value;
            localStorage.setItem("event4", JSON.stringify(input));

        });
    };
    save4();
    function save5() {
        const saveEl = document.getElementById("save5");
        saveEl.addEventListener("click", function () {
            const input = document.getElementById("event5").value;
            localStorage.setItem("event5", JSON.stringify(input));

        });
    };
    save5();
    function save6() {
        const saveEl = document.getElementById("save6");
        saveEl.addEventListener("click", function () {
            const input = document.getElementById("event6").value;
            localStorage.setItem("event6", JSON.stringify(input));

        });
    };
    save6();
    function save7() {
        const saveEl = document.getElementById("save7");
        saveEl.addEventListener("click", function () {
            const input = document.getElementById("event7").value;
            localStorage.setItem("event7", JSON.stringify(input));

        });
    };
    save7();
    function save8() {
        const saveEl = document.getElementById("save8");
        saveEl.addEventListener("click", function () {
            const input = document.getElementById("event8").value;
            localStorage.setItem("event8", JSON.stringify(input));

        });
    };
    save8();

//  create function to retrieve saved local storage for each time box
    function retrieve1() { 
        const showEl = document.getElementById("event1");
        showEl.innerHTML = localStorage.getItem("event1")
    }
    retrieve1 ();

    function retrieve2() { 
        const showEl = document.getElementById("event2");
        showEl.innerHTML = localStorage.getItem("event2")
    }
    retrieve2 ();

    function retrieve3() { 
        const showEl = document.getElementById("event3");
        showEl.innerHTML = localStorage.getItem("event3")
    }
    retrieve3 ();

    function retrieve4() { 
        const showEl = document.getElementById("event4");
        showEl.innerHTML = localStorage.getItem("event4")
    }
    retrieve4 ();

    function retrieve5() { 
        const showEl = document.getElementById("event5");
        showEl.innerHTML = localStorage.getItem("event5")
    }
    retrieve5 ();

    function retrieve6() { 
        const showEl = document.getElementById("event6");
        showEl.innerHTML = localStorage.getItem("event6")
    }
    retrieve6 ();

    function retrieve7() { 
        const showEl = document.getElementById("event7");
        showEl.innerHTML = localStorage.getItem("event7")
    }
    retrieve7 ();

    function retrieve8() { 
        const showEl = document.getElementById("event8");
        showEl.innerHTML = localStorage.getItem("event8")
    }
    retrieve8 ();

    function retrieve9() { 
        const showEl = document.getElementById("event9");
        showEl.innerHTML = localStorage.getItem("event9")
    }
    retrieve9 ();
    // change colors to reflect past, present, and future
    function colors() {
        for (i = 0; i < timeArray.length; i++) {
            if (hour < timeArray[i]) {
                document.querySelector(".description").setAttribute("class", "future");


            } else if (hour > timeArray[i]) {
                document.querySelector(".description").setAttribute("class", "past");


            } else if (hour === timeArray[i]) {
                document.querySelector(".description").setAttribute("class", "present");


            };
        };
    };
    colors();




    //



}


























