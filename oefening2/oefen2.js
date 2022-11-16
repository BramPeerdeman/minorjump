var currentDate = new Date(); // get your current date and time__
var curentHour = currentDate.getHours(); // get Hours of your current time__
var curentMinutes = currentDate.getMinutes(); // get minutes of your current time__

var intervalId = null;
var varCounter = 0; // count the display times, and set initial value
var displayTimes = 9; // between 10'O clock to 6'O clock modal has to display 9 times

// stop function arround 6'O clock 
var varModal = function(){
     if(varCounter < 10) {
          varCounter++; // you can remove this code
          alert(varCounter + 'time'); // you can remove this code
         
          /* your code goes here */
          
     } else {
          // stop modal duisplay after 9 times, it's mea after on 6'O clock 
          clearInterval(intervalId);
          alert('Stop will start on next day'); // you can remove this code
     }
};

/*
* display modal arround 10'O clock, 
* This function will trigger after each one hour, 
* So you have to set value 9, then only it'trigger arround 10'O clock
* -------
* If you want to trigger this modal arround 9'O clock, you have to check with value 8
*/
  
  
var localTimeInHours = 11; // have to mention your current time hours
var hoursForValidation = localTimeInHours - 1;

   if(curentHour >= hoursForValidation && curentMinutes > 0){
      intervalId = setInterval(varModal, 600000);
    }