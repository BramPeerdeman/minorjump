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