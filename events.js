let swiper99;

let eventModule = function () {
    let flag = 0;
    let parent, template;
    let surr;
    let surrel;
    let parentel;
    var club;
    var mid=0;
    var master = document.querySelector("#masterModal");
    var masterify=sel("#maincontent");


    function sel(d) {
        return document.querySelector(d);
    }

    function cap(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}



    
function swiperinit(cl) {
      
    let swiper=new Swiper(cl, {
        effect: 'coverflow',
        preventInteractionOnTransition: true,
        allowSlidePrev: true,
        allowSlideNext: true,
        grabCursor: true,
        initialSlide:mid,
        centeredSlides: true,
        slidesPerView: 3,
        mousewheel: {
            invert: true,
          },
          keyboard: {
            enabled: true,
            onlyInViewport: false,
          },
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is <= 480px
            480: {
                slidesPerView: 1,
            },
            // when window width is <= 640px
            768: {
                slidesPerView: 2,
            }
        },
        coverflowEffect: {
            rotate: 10,
            stretch: -50,
            depth: 250,
            modifier: 1,

            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: false
        },
    });
  
    parentel.parentElement.children[0].children[0].children[0].addEventListener("click",function(){
        console.log("lol")
        swiper.slidePrev(700);
    })
    parentel.parentElement.children[0].children[0].children[1].addEventListener("click",function(){
        swiper.slideNext(700);
    });

}


    function renderTitle(events) {
        console.log("wathaaa")
  console.log(parent);
  console.log(parentel);
        events.forEach((data) => {
            parentel.children[0].innerHTML += template.replace(/{{title}}/, data);
        });
    }


    function gatherEvents(d) {
        console.log("Gather-------"+d);
        console.log(d);
        let eventsbarlist = [];

        for (var i = 0; i < d.events.length; i++) {
            eventsbarlist.push(d.events[i].title);
        }
        mid=Math.floor(eventsbarlist.length/2);
        console.log(mid+"mohan pierce");
        renderTitle(eventsbarlist);
        console.log("ohmygod")
        console.log(parent);
        parentel.addEventListener("click", controller);
        swiperinit(parent);
    }


    function controller(e) {
        if (e.target.tagName === "BUTTON") {
            console.log(master.children);
            // sel("#mtitle").innerHTML="";
            sel("#maincontent").innerHTML="";
       
            var previous2 = e.target.parentElement.children[1].innerHTML;
            previous = previous2.replace(/\s+/g, "");
            console.log(club);
            console.log(JSON.parse(localStorage.getItem(club)));
            let data = JSON.parse(localStorage.getItem(club));
            console.log(previous2+"mohanpierce");
            sel("#mtitle").innerHTML = previous2;
            console.log(previous,data);
            rendercontent(data, previous2);
            $("#mastersof").trigger('click');

        }
    }

    function rendercontent(d, pre) {
        var title, ruleitem, rulelist;
        console.log(d);
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


    function init(clubname, loc, temp) {
        club=clubname;
        parent = loc;
        parentel = sel(loc);
   
        parentel.children[0].innerHTML="";
        console.log(parent);
        surr=parent;
        surrel=parentel;
        console.log(surr,surrel+"safjdfjdsfjjd");
        template = temp.innerHTML;
        var flag=1;
        if (localStorage.getItem(clubname) && flag === 0) {
            let e = JSON.parse(localStorage.getItem(clubname));
            gatherEvents(e);

        }
         else {
            console.log("Kandavel"+parent);
            fetch("assets/json/"+clubname+".json").then(function (response) {
                return response.json();
            }).then(function (e) {
                console.log("Mosklsakmasf",parent);
                localStorage.setItem(e.title, JSON.stringify(e));
                console.log(e.title);
                console.log("Parent........."+parent);
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



};







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