let design = document.querySelector('#demo01');
let lop = document.querySelector('lop');
let eventsbarlist = [];
// document.querySelector("h1").style.display="block";

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

design.addEventListener('click', () => {

    
    fetch("json/EnglishLiteraryClub.json").then(response => response.json())
        .then(
            d => {
                //console.log(d);
                document.querySelector("#eventlist").innerHTML = "";
                document.querySelector("#clubtitle").textContent = d.name;
                eventsbarlist.length=0;
                for (var i = 0; i < d.events.length; i++) {
                    eventsbarlist.push(d.events[i].title);
                }
                console.log(eventsbarlist);
                eventsbarlist.forEach((data, i) => {
                    let ele = document.createElement("li");
                    ele.textContent = data;
                    ele.addEventListener("click", function () {
                        //contents setting
                        document.querySelector("#eventcontents").innerHTML = "";
                        for (var property in d.events[i]) {
                            var a;
                            var title;
                            if (property == "title") {
                                console.log(55);
                                a = document.createElement("h2");
                                a.innerHTML = d.events[i][property];
                                document.querySelector("#eventcontents").appendChild(a);

                            } else {
                                title = document.createElement("h3");
                                title.innerHTML = property.capitalize();
                                document.querySelector("#eventcontents").appendChild(title);

                                if (d.events[i][property].includes(';')) {
                                    let list = document.createElement("ul");
                                    let rulelist = d.events[i][property].split(';');
                                    let ruleitem;
                                    rulelist.forEach((rule, j) => {
                                        ruleitem = document.createElement("li");
                                        ruleitem.textContent = rule;
                                        list.appendChild(ruleitem);
                                    })
                                    document.querySelector("#eventcontents").appendChild(list);
                                } else {
                                    a = document.createElement("p");
                                    a.innerHTML = d.events[i][property];
                                    document.querySelector("#eventcontents").appendChild(a);
                                }

                            }

                        }
                    });
                    document.querySelector("#eventlist").appendChild(ele);
                    console.log(ele);
                });
                //console.log(d.events[0]);
                document.querySelector("#eventcontents").innerHTML="";
                for (let property in d.events[0]) {
                    let a;
                    if (property == "title") {
                        //console.log(55);
                        a = document.createElement("h2");
                        a.innerHTML = d.events[0][property];
                        document.querySelector("#eventcontents").appendChild(a);

                    } 
                    else {
                        title = document.createElement("h3");
                        title.innerHTML = property.capitalize();
                        document.querySelector("#eventcontents").appendChild(title);
                        if (d.events[0][property].includes(';')) {
                            let list = document.createElement("ul");
                            let rulelist = d.events[0][property].split(';');
                            let ruleitem;
                            rulelist.forEach((rule, j) => {
                                ruleitem = document.createElement("li");
                                ruleitem.textContent = rule;
                                list.appendChild(ruleitem);
                            })
                            document.querySelector("#eventcontents").appendChild(list);
                        } else {
                            a = document.createElement("p");
                            a.innerHTML = d.events[0][property];
                            // console.log(d.events[0][property]);
                            // console.log(document.querySelector("#eventcontents"));
                            document.querySelector("#eventcontents").appendChild(a);
                        }

                    }

                }



            })
})