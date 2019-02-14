var noddy = document.querySelector("#nod");
var logo = document.querySelector("#logo");

setTimeout(() => {
    logo.classList.remove("logooff");
    logo.classList.add("logoon");
}, 800);

setTimeout(() => {
    noddy.classList.remove("nodoff");
noddy.classList.add("nodon"); 
}, 4000);
