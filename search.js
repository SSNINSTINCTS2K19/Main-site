var a = document.querySelector("#inp");
var sicon = document.querySelector(".plusdisplay");
var cb = document.querySelector(".closeboxclose");
var ul = document.querySelector("#query");
var timer;
sicon.addEventListener("click",function(){
    a.classList.remove("tasktxtclose");
    a.classList.add("tasktxtdisplay");
    cb.classList.remove("closeboxclose");
    cb.classList.add("closeboxdisplay");
    sicon.classList.remove("plusdisplay");
    sicon.classList.add("plusclose");
    a.focus();
})
cb.addEventListener("click",function(){
    a.classList.remove("tasktxtdisplay");
    a.classList.add("tasktxtclose");
    sicon.classList.remove("plusclose");
    sicon.classList.add("plusdisplay");
    cb.classList.remove("closeboxdisplay");
    cb.classList.add("closeboxclose");
    a.value="";
    ul.innerHTML="";

})  


fetch("event_title.json").then(function (response) {
    return response.json();
}).then(function (arr) {
        a.addEventListener("input", function () {
            ul.innerHTML = "";
            ul.style.display="initial";
            Object.keys(arr).forEach(function (element, i) {
                if (a.value!= "" && element.toLowerCase().includes(a.value.toLowerCase())) {
                    var outerli = document.createElement("li");
                    var item = document.createElement("li");
                    var anc = document.createElement("a");
                    item.style.listStyle="none";
                    // outerli.style.listStyle="none";
                    item.classList.add("licss");
                    // anc.setAttribute("href","#"+element);
                    item.innerHTML = element;
                    // outerli.classList.add("licss");
                    // outerli.appendChild(anc);
                    // anc.appendChild(item);
                    ul.appendChild(item);
                    item.addEventListener("click",function(){
                        ul.style.display="none";
                        document.getElementById(element).scrollIntoView();
                    });
                }
            arr[element].forEach(function (e, j) {
                    if (a.value != "" && e.toLowerCase().includes(a.value.toLowerCase())) {
                        var outerli = document.createElement("li");
                        var item = document.createElement("li");
                        var anc = document.createElement("a");
                        item.style.listStyle="none";
                        // outerli.style.listStyle="none";
                        item.classList.add("licss");
                        // anc.setAttribute("href","#"+element);
                        item.innerHTML = e;
                        // outerli.classList.add("licss");
                        // outerli.appendChild(anc);
                        // anc.appendChild(item);
                        ul.appendChild(item);    
                        item.addEventListener("click",function(){
                            ul.style.display="none";
                            document.getElementById(element).scrollIntoView();
                        });
                    }
                })
            });
        });
    });

   
function set(){
    timer=setInterval(()=>{
        document.querySelector("#arrow").click();
    },3000);
}
function clear(){
    clearInterval(timer);
}
set();
document.querySelector(".wrapper").addEventListener("mouseover",function(){
    console.log(1);
    clear();
});
document.querySelector(".wrapper").addEventListener("mouseout",function(){
    console.log(2);
    set();
});