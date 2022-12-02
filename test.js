window.onload = function() {
    setInterval(function() {
      document.querySelector('.style').style.backgroundColor = colors[rand(colors.length)];
      //$('.style').css("backgroundColor", colors[rand(colors.length)]);
    }, 2000);
  }
  
  var colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'magenta',
    'pink'
  ];
  
  
  var rand = function(max) {
    return Math.floor(Math.random() * max);
  };