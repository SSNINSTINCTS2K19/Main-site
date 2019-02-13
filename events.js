let eventModule = (function () {
    let flag = 0;
    let parent, template;
    let parentel;
    var club;
    var master = document.querySelector("#masterModal");
    var masterify=master.children[1];


    function sel(d) {
        return document.querySelector(d);
    }

    function cap(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function modalmanp(){
    if(master.classList.contains("masterModal-off")){
        master.classList.remove("masterModal-off");
        master.classList.remove("zoomOut");
    }
    master.classList.toggle(master.id + "-on");
    master.classList.toggle("zoomIn");
    master.style="position: fixed; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgb(57, 190, 185); overflow-y: auto; z-index: 100000;  animation-duration: 0.6s;"
}

//     function swiperinit(cl) {
//         console.log(cl);
// console.log("hello");
//         var swiper1=new Swiper(cl, {
//             effect: 'coverflow',
//             preventInteractionOnTransition: true,
//             allowSlidePrev: true,
//             allowSlideNext: true,
//             grabCursor: true,
//             centeredSlides: true,
//             slidesPerView: 3,
//             breakpoints: {
//                 // when window width is <= 320px
//                 320: {
//                     slidesPerView: 1,
//                 },
//                 // when window width is <= 480px
//                 480: {
//                     slidesPerView: 1,
//                 },
//                 // when window width is <= 640px
//                 768: {
//                     slidesPerView: 2,
//                 }
//             },
//             coverflowEffect: {
//                 rotate: 10,
//                 stretch: -50,
//                 depth: 250,
//                 modifier: 1,

//                 slideShadows: true,
//             },
//             pagination: {
//                 el: '.swiper-pagination',
//                 type: 'bullets',
//                 clickable: false
//             },
//         });


//     }


    function renderTitle(events) {
        events.forEach((data) => {
            parentel.children[0].innerHTML += template.replace(/{{title}}/, data);
        });
    }


    function gatherEvents(d) {
        let eventsbarlist = [];
        for (var i = 0; i < d.events.length; i++) {
            eventsbarlist.push(d.events[i].title);
        }
        renderTitle(eventsbarlist);
        parentel.addEventListener("click", controller);
    }


    function controller(e) {
        if (e.target.tagName === "BUTTON") {
            console.log(e.target.parentElement.children[1]);
            var previous2 = e.target.parentElement.children[1].innerHTML;
            previous = previous2.replace(/\s+/g, "");
            let data = JSON.parse(localStorage.getItem(club));
            sel("#mtitle").innerHTML = previous;
            console.log(previous);
            rendercontent(data, previous2);
            modalmanp();
        }
    }

    function rendercontent(d, pre) {
        var title, ruleitem, rulelist;
        console.log(pre);
        var b = d.events.find((data) => data.title.includes(pre));
        for (let property in b) {
            let a;
            if (property == "title") {

            } else {
                title = document.createElement("h3");
                title.innerHTML = cap(property);
                masterify.appendChild(title);
                if (b[property].includes(';')) {
                    let list = document.createElement("ul");
                    let rulelist = b[property].split(';');
                    let ruleitem;
                    rulelist.forEach((rule, j) => {
                        ruleitem = document.createElement("li");
                        ruleitem.textContent = rule;
                        list.appendChild(ruleitem);
                    })
                    masterify.appendChild(list);
                } else {
                    a = document.createElement("p");
                    a.innerHTML = b[property];
                    masterify.appendChild(a);
                }

            }

        }

    }

    // function render(d) {
    //     //console.log(d);




    //     document.querySelector("#" + d.title + "eventlist").innerHTML = "";
    //     document.querySelector("#" + d.title + "clubtitle").textContent = d.name;
    //     eventsbarlist.length = 0;

    //     console.log(eventsbarlist);
    //     eventsbarlist.forEach((data, i) => {
    //       let ele = document.createElement("div");
    //       ele.textContent = data;
    //       ele.addEventListener("click", function () {
    //         //contents setting
    //         document.querySelector("#" + d.title + "eventcontents").innerHTML = "";
    //         for (var property in d.events[i]) {
    //           var a;
    //           var title;
    //           if (property == "title") {
    //             console.log(55);
    //             a = document.createElement("h2");
    //             a.innerHTML = d.events[i][property];
    //             document.querySelector("#" + d.title + "eventcontents").appendChild(a);

    //           } else {
    //             title = document.createElement("h3");
    //             title.innerHTML = property.capitalize();
    //             document.querySelector("#" + d.title + "eventcontents").appendChild(title);

    //             if (d.events[i][property].includes(';')) {
    //               let list = document.createElement("ul");
    //               let rulelist = d.events[i][property].split(';');
    //               let ruleitem;
    //               rulelist.forEach((rule, j) => {
    //                 ruleitem = document.createElement("li");
    //                 ruleitem.textContent = rule;
    //                 list.appendChild(ruleitem);
    //               })
    //               document.querySelector("#" + d.title + "eventcontents").appendChild(list);
    //             } else {
    //               a = document.createElement("p");
    //               a.innerHTML = d.events[i][property];
    //               document.querySelector("#" + d.title + "eventcontents").appendChild(a);
    //             }

    //           }

    //         }
    //       });
    //       document.querySelector("#" + d.title + "eventlist").appendChild(ele);
    //       console.log(ele);
    //     });
    //     //console.log(d.events[0]);
    //     document.querySelector("#" + d.title + "eventcontents").innerHTML = "";
    //     for (let property in d.events[0]) {
    //       let a;
    //       if (property == "title") {
    //         //console.log(55);
    //         a = document.createElement("h2");
    //         a.innerHTML = d.events[0][property];
    //         document.querySelector("#" + d.title + "eventcontents").appendChild(a);

    //       } else {
    //         title = document.createElement("h3");
    //         title.innerHTML = property.capitalize();
    //         document.querySelector("#" + d.title + "eventcontents").appendChild(title);
    //         if (d.events[0][property].includes(';')) {
    //           let list = document.createElement("ul");
    //           let rulelist = d.events[0][property].split(';');
    //           let ruleitem;
    //           rulelist.forEach((rule, j) => {
    //             ruleitem = document.createElement("li");
    //             ruleitem.textContent = rule;
    //             list.appendChild(ruleitem);
    //           })
    //           document.querySelector("#" + d.title + "eventcontents").appendChild(list);
    //         } else {
    //           a = document.createElement("p");
    //           a.innerHTML = d.events[0][property];
    //           document.querySelector("#" + d.title + "eventcontents").appendChild(a);
    //         }

    //       }

    //     }

    //   };




    function init(clubname, loc, temp) {
        club=clubname;
        parent = loc;
        console.log(loc);
        parentel = sel(loc);
        parentel.children[0].innerHTML="";
        console.log(parentel);
        template = temp.innerHTML;
        if (localStorage.getItem(clubname) && flag === 0) {
            let e = JSON.parse(localStorage.getItem(clubname));
            gatherEvents(e);

        } else {
            fetch("assets/json/" + clubname + ".json").then(function (response) {
                return response.json();
            }).then(function (e) {
                localStorage.setItem(e.title, JSON.stringify(e));
                console.log(e.title);
                gatherEvents(e);
            });
        }

    }

    return {
        start: init,
        setFlag: function (n) {
            flag = n;
        }

    }



})();







// //////////////////




// let master;
// var arr = [
//   "linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)",
//   "linear-gradient(135deg, #13f1fc 0%,#0470dc 100%)",
//   "linear-gradient(135deg, #CE9FFC 0%,#7367F0 100%)",
//   "linear-gradient(135deg, #F36265 0%,#961276 100%)",
//   "linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)",
//   "linear-gradient(135deg, #7117ea 0%,#ea6060 100%)",
//   "linear-gradient(135deg, #17ead9 0%,#6078ea 100%)",
//   "linear-gradient( 135deg, #6B73FF 10%, #000DFF 100%)",
//   "linear-gradient(to right top, #350537, #680045, #9c0045, #c90036, #eb3812)",
//   "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
//   "linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);",
//   "linear-gradient(to top, #09203f 0%, #537895 100%);",
//   "linear-gradient(to top, #f77062 0%, #fe5196 100%);",
//   "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);",
//   "linear-gradient(to right, #00dbde 0%, #fc00ff 100%);",
//   "linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%);"
// ];
// master = arr.map((data) => {
//   return {
//     color: data,
//     used: false
//   }
// });

// function randomGen(master) {
//   let o = rand(master.length);
//   while (master[o].used) {
//     o = rand(arr.length);
//   }
//   return o;
// }

// function rand(n) {
//   return Math.floor(Math.random() * (n - 0) + 0);
// }

// function render(master, n) {
//   let i = 0;
//   while (i < n) {
//     console.log(arr[randomGen(master)]);
//     i += 1;
//   }
// }
// render(master, 3);