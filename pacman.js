var pac = document.querySelector("#pm");
var gst1 = document.querySelector("#gh1");
var gst2 = document.querySelector("#gh2");
var lop = document.querySelector("#LightsOutPlease");

$(window).scroll(function() {
    var hT = $('#LightsOutPlease').offset().top,
        hH = $('#LightsOutPlease').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
      console.log("Pacman!")
    }
  });
  
