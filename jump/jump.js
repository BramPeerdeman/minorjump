// var timer;
// function startTimer(duration, display) {
//     timer = duration;
//     var minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// function resetTimer() {
//   timer = 10 * 1;
// }

// window.onload = function () {
//     fiveMinutes = 10 * 1,
//         display = document.querySelector('.time');
//     startTimer(fiveMinutes, display);
// };



// var timer1;
// function startTimer(duration1, display1) {
//     timer1 = duration1;
//     var minutes1, seconds1;
//     setInterval(function () {
//         minutes1 = parseInt(timer1 / 60, 10)
//         seconds1 = parseInt(timer1 % 60, 10);

//         minutes1 = minutes1 < 10 ? "0" + minutes1 : minutes1;
//         seconds1 = seconds1 < 10 ? "0" + seconds1 : seconds1;

//         display1.textContent1 = minutes1 + ":" + seconds1;

//         if (--timer1 < 0) {
//             timer1 = duration1;
//         }
//     }, 1000);
// }

// //function resetTimer1() {
//   //  timer1 = 10 * 1;
//   //}

//  // window.onload = function () {
//  //     fiveMinutes1 = 10 * 1,
//  //         display1 = document.querySelector('.time1');
//  //     startTimer1(fiveMinutes1, display1);
// //};

// function showIt() {
//     document.getElementById("hid").style.visibility = "visible";
//   }
//   setTimeout("showIt()", 3000); // after 3 seconds




function openColorBox() {
    $.colorbox({
        iframe: true,
        width: "100%",
        height: "100%",
        href: "kerst.webp",
        onLoad: function () {
            $('#cboxClose').remove();
            setTimeout(function () {
                $(window).colorbox.close();
            }, 10000)
        }
    });
}

// var seconds = 1,
setInterval(countDown, 600000);

function countDown() {
    openColorBox();
}




let timeInSecs2;
let ticker2;

  const targetTime = new Date();

  targetTime.setHours(11, 0, 0, 0);

  function startTimer() {
    // Calculate the time remaining in seconds
    timeInSecs2 = Math.floor((targetTime - Date.now()) / 1000);

    // If the target time has passed, set the target time to the next day
    if (timeInSecs2 < 0) {
      targetTime.setDate(targetTime.getDate() + 1);
      timeInSecs2 = Math.floor((targetTime - Date.now()) / 1000);
    }

    ticker2 = setInterval(tick2, 1000);
  }

  function tick2() {
    // Decrease the time remaining by 1 second
    timeInSecs2--;
  
    // Calculate the time remaining in seconds
    let secs2 = timeInSecs2;
    
    // If the target time has passed, set the target time to the next day
    if (secs2 <= 0) {
      targetTime.setDate(targetTime.getDate() + 1);
      timeInSecs2 = Math.floor((targetTime - Date.now()) / 1000);
      secs2 = timeInSecs2;
    }
  
    // Calculate the time remaining in half-hour blocks
    let halfHourBlocks = Math.floor(secs2 / 3600);
    secs2 %= 3600;
  
    // Calculate the time remaining in minutes and seconds
    let mins2 = Math.floor(secs2 / 60);
    secs2 %= 60;
  
    // Format the time as a string
    let pretty2 =  (mins2 < 10 ? "0" : "") + mins2 + ":" + (secs2 < 10 ? "0" : "") + secs2;
  
    // Update the countdown element
    document.getElementById("countdown2").innerHTML = pretty2;
    document.getElementById("fullscreenTimerId").innerHTML = secs2;
  
    // countdown van 10
    if (mins2 == 0 && secs2 < 11) {
      document.body.style.backgroundColor = "#2803a0";
      document.getElementById("container").style.display = "none";
      document.getElementById("fullscreenTimerId").style.display = "block";
}
setTimeout(function delay() {
if (secs2 == 0) {
document.body.style.backgroundColor = "#00bfff";
document.getElementById("container").style.display = "grid";
document.getElementById("fullscreenTimerId").style. display = "none";
}
}, 1000);
}

startTimer();







// let timeInSecs;
// let ticker;

// function startTimer(secs) {
//   timeInSecs = parseInt(secs);
//   ticker = setInterval("tick()", 1000); 
// }

// function tick( ) {
//   let secs = timeInSecs;
//   if (secs > 0) {
//     timeInSecs--; 
//   }
//   else {
//     clearInterval(ticker);
//     startTimer(3600); // reset timer to 60 minutes
//   }

//   // If the timer hits 30 minutes, reset it to 60 minutes
//   if (secs == 1800) {
//     clearInterval(ticker);
//     startTimer(3600);
//   }

//   let mins = Math.floor(secs/60);
//   secs %= 60;
//   let pretty = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

//   document.getElementById("countdown2").innerHTML = pretty;
// }

// startTimer(3600); 






window.addEventListener("load", () => {
    clock();
    function clock() {
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        const day = today.getDate();
        //declaring a list of all months in  a year
        const monthList = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const date = monthList[month] + " " + day + ", " + year;
        document.getElementById("date").innerHTML = date;
        setTimeout(clock, 1000);
    }
});




