var pwr = document.querySelector("#pwr");
var s = document.querySelector("#spon");
var x = 2662.72729492187;
s.classList.remove("sponoff");
s.classList.add("sponon");
pwr.classList.remove("pwroff");
pwr.classList.add("pwron");
window.onscroll = function(){Myfuc()};
    // console.log("Gadot!!!");
    function Myfuc(){
  if (document.body.scrollTop >= 10 || document.documentElement.scrollTop > 10) {
    // document.getElementById("myImg").className = "slideUp";
    console.log("Gadot!!!");
  }
};