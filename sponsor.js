var pwr1 = document.querySelector("#pwr1");
var s1 = document.querySelector("#spon1");
var t1 = document.querySelector("#tag1");
// var pwr2 = document.querySelector("#pwr2");
// var s2 = document.querySelector("#spon2");
// var t2 = document.querySelector("#tag2");
// var pwr3 = document.querySelector("#pwr3");
// var s3 = document.querySelector("#spon3");
// var t3 = document.querySelector("#tag3");


$(window).scroll(function() {
  var hT = $('#Gal').offset().top,
      hH = $('#Gal').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
    s1.classList.remove("sponoff");
    s1.classList.add("sponon1");
    pwr1.classList.remove("pwroff");
    pwr1.classList.add("pwron1");
    t1.classList.remove("tagoff");
    t1.classList.add("tagon1");
    // s2.classList.remove("sponoff");
    // s2.classList.add("sponon2");
    // pwr2.classList.remove("pwroff");
    // pwr2.classList.add("pwron2");
    // t2.classList.remove("tagoff");
    // t2.classList.add("tagon2");
    // s3.classList.remove("sponoff");
    // s3.classList.add("sponon3");
    // pwr3.classList.remove("pwroff");
    // pwr3.classList.add("pwron3");
    // t3.classList.remove("tagoff");
    // t3.classList.add("tagon3");
  }
});


