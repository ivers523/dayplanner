window.onload = function() {
    
    let now = moment();
    let day = moment().format("MMMM DD YYYY");
    timeArray = [9,10,11,12,13,14,15,16,17];

    // display current date in Jumbotron
    document.getElementById("currentDay").innerHTML= day;

    function colors(){
        for(i = 0; i < timeArray.length; i++){
            if (timeArray[i] < now){
                document.querySelector('#eventbox').setAttributead('class', 'past');

            }else if(timeArray[i] > now){
                document.querySelector('#eventbox').setAttribute('class', 'future');

            }else if(timeArray[i] === now){
                document.querySelector('#eventbox').setAttribute('class', 'present');
            
            };  
        };
    };
    colors();
    moment();










    };



    








