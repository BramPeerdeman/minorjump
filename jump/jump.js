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
        href: "#",
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




var timeInSecs;
var ticker;

function startTimer(secs) {
    timeInSecs = parseInt(secs);
    ticker = setInterval("tick()", 1000);
}

function tick() {
    var secs = timeInSecs;
    if (secs > 0) {
        timeInSecs--;
    }
    else {
        clearInterval(ticker);
        startTimer(5 * 60); // 4 minutes in seconds
    }
    var mins = Math.floor(secs / 60);
    secs %= 60;
    var pretty = ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;

    document.getElementById("countdown").innerHTML = pretty;
}

startTimer(10 * 60); // 4 minutes in seconds



var timeInSecs1;
var ticker1;

function startTimer1(secs1) {
    timeInSecs1 = parseInt(secs1);
    ticker1 = setInterval("tick1()", 1000);
}

function tick1() {
    var secs1 = timeInSecs1;
    if (secs1 > 0) {
        timeInSecs1--;
    }
    else {
        clearInterval(ticker1);
        startTimer1(5 * 60); // 4 minutes in seconds
    }
    var mins1 = Math.floor(secs1 / 60);
    secs1 %= 60;
    var pretty1 = ((mins1 < 10) ? "0" : "") + mins1 + ":" + ((secs1 < 10) ? "0" : "") + secs1;

    document.getElementById("countdown1").innerHTML = pretty1;
}

startTimer1(10 * 60); // 4 minutes in seconds



var timeInSecs2;
var ticker2;

function startTimer2(secs2) {
    timeInSecs2 = parseInt(secs2);
    ticker2 = setInterval("tick2()", 1000);
}

function tick2() {
    var secs2 = timeInSecs2;
    if (secs2 > 0) {
        timeInSecs2--;
    }
    else {
        clearInterval(ticker2);
        startTimer2(5 * 60); // 4 minutes in seconds
    }
    var mins2 = Math.floor(secs2 / 60);
    secs2 %= 60;
    var pretty2 = ((mins2 < 10) ? "0" : "") + mins2 + ":" + ((secs2 < 10) ? "0" : "") + secs2;

    document.getElementById("countdown2").innerHTML = pretty2;
}

startTimer2(20 * 60); // 4 minutes in seconds







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




