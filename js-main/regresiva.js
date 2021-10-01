// Set the date we're counting down to
var countDownDate = new Date("October 15, 2021 23:00:00").getTime();

//October 04, 2021 19:00:00
// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
    var da = "";
    var ho = "";
    var mi = "";
    var se = "";

    if (days < 10){
        da = "0";
    }

    if (hours < 10){
        ho = "0";
    }

    if (minutes < 10){
        mi = "0";
    }

    if (seconds < 10){
        se = "0";
    }

    document.getElementById("dia").innerHTML = da + days;
    document.getElementById("hora").innerHTML = ho + hours;
    document.getElementById("minu").innerHTML = mi + minutes
    document.getElementById("segun").innerHTML = se + seconds;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("fin").innerHTML = "Chegou a hora!";
  }
}, 1000);