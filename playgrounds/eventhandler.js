let design = document.querySelector('#demo01');
let lop = document.querySelector('lop');
let eventsbarlist = [];
// document.querySelector("h1").style.display="block";


design.addEventListener('click', () => {
    fetch("json/EnglishLiteraryClub.json").then(response => response.json())
        .then(
            d => {
                console.log(d)
                document.querySelector("#eventlist").innerHTML = "";
                document.querySelector("#clubtitle").textContent = d.name;
                for (var i = 0; i < d.events.length; i++) {
                    eventsbarlist.push(d.events[i].title);
                }
                eventsbarlist.forEach((data, i) => {
                    let ele = document.createElement("li");
                    ele.textContent = data;
                    ele.addEventListener("click", function () {

                    });
                    console.log(document.querySelector("#eventlist"));
                    document.querySelector("#eventlist").appendChild(ele);
                });
                console.log(d.events[0]);
                for (var property in d.events[0]) {
                    var a;
                    if (property == "title") {
                        console.log(55);
                        a = document.createElement("h2");

                    } else {
                        a = document.createElement("p");
                    }
                    a.innerHTML = d.events[0][property];
                    console.log(d.events[0][property]);
                    console.log(document.querySelector("#eventcontents"));
                    document.querySelector("#eventcontents").appendChild(a);
                }



            })
})