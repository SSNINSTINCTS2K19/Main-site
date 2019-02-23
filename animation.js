(function () {

    window.onload = function(){ 
        var noddy = document.querySelector("#nod");
        var logo = document.querySelector("#logo");

        document.querySelector(".loa").style.display = "none";
        document.querySelector(".mainbody").style.display = "block";
        noddy.classList.add("nodoff");
        logo.classList.add("logoon");
        setTimeout(() => {
        logo.classList.remove("logooff");
        logo.classList.add("logoon");
        }, 800);

        setTimeout(() => {
        noddy.classList.remove("nodoff");
        noddy.classList.add("nodon"); 
        }, 4000);
     };
      var pwr1=document.querySelector("#pwr1");
      var s1=document.querySelector("#spon1");
      var t1=document.querySelector("#tag1");

    $(window).scroll(function () {
        var hT = $('#Gal').offset().top,
            hH = $('#Gal').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            s1.classList.remove("sponoff");
            s1.classList.add("sponon1");
            pwr1.classList.remove("pwroff");
            pwr1.classList.add("pwron1");
            t1.classList.remove("tagoff");
            t1.classList.add("tagon1");
        }
    });



})();

(function () {
    var a = document.querySelector("#inp");
    var sicon = document.querySelector(".plusdisplay");
    var cb = document.querySelector(".closeboxhide");
    var ul = document.querySelector("#query");
    sicon.addEventListener("click", function () {
        a.classList.remove("tasktxtclose");
        a.classList.add("tasktxtdisplay");
        cb.classList.remove("closeboxhide");
        cb.classList.add("closeboxdisplay");
        sicon.classList.remove("plusdisplay");
        sicon.classList.add("plusclose");
        a.focus();
    })
    cb.addEventListener("click", function () {
        a.classList.remove("tasktxtdisplay");
        a.classList.add("tasktxtclose");
        sicon.classList.remove("plusclose");
        sicon.classList.add("plusdisplay");
        cb.classList.remove("closeboxdisplay");
        cb.classList.add("closeboxhide");
        a.value = "";
        ul.innerHTML = "";

    })


    fetch("event_title.json").then(function (response) {
        return response.json();
    }).then(function (arr) {
        a.addEventListener("input", function () {
            ul.innerHTML = "";
            ul.style.display = "initial";
            Object.keys(arr).forEach(function (element, i) {
                if (a.value != "" && element.toLowerCase().includes(a.value.toLowerCase())) {
                    var outerli = document.createElement("li");
                    var item = document.createElement("li");
                    var anc = document.createElement("a");
                    item.style.listStyle = "none";
                    // outerli.style.listStyle="none";
                    item.classList.add("licss");
                    // anc.setAttribute("href","#"+element);
                    item.innerHTML = element;
                    // outerli.classList.add("licss");
                    // outerli.appendChild(anc);
                    // anc.appendChild(item);
                    ul.appendChild(item);
                    item.addEventListener("click", function () {
                        ul.style.display = "none";
                        var srch = element.replace(/\s+/g, "");
                        console.log(srch);
                        document.getElementById(srch).scrollIntoView();
                    });
                }
                arr[element].forEach(function (e, j) {
                    if (a.value != "" && e.toLowerCase().includes(a.value.toLowerCase())) {
                        var outerli = document.createElement("li");
                        var item = document.createElement("li");
                        var anc = document.createElement("a");
                        item.style.listStyle = "none";
                        // outerli.style.listStyle="none";
                        item.classList.add("licss");
                        // anc.setAttribute("href","#"+element);
                        item.innerHTML = e + "(" + element + ")";
                        // outerli.classList.add("licss");
                        // outerli.appendChild(anc);
                        // anc.appendChild(item);
                        ul.appendChild(item);
                        item.addEventListener("click", function () {
                            ul.style.display = "none";
                            var srch = element.replace(/\s+/g, "");
                            console.log(srch);
                            document.getElementById(srch).scrollIntoView();
                        });
                    }
                })
            });
        });
    });
    // function set(){
    //     timer=setInterval(()=>{
    //         document.querySelector("#arrow").click();
    //     },3000);
    // }
    // function clear(){
    //     clearInterval(timer);
    // }
    // set();
    // document.querySelector(".wrapper").addEventListener("mouseover",function(){
    //     console.log(1);
    //     clear();
    // });
    // document.querySelector(".wrapper").addEventListener("mouseout",function(){
    //     console.log(2);
    //     set();
    // });
})();


(function () {
    var pac = document.querySelector("#pm");
    var gst1 = document.querySelector("#gh1");
    var gst2 = document.querySelector("#gh2");
    var lop = document.querySelector("#LightsOutPlease");

    $(window).scroll(function () {
        var hT = $('#LightsOutPlease').offset().top,
            hH = $('#LightsOutPlease').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
    });
})();

(function () {
    var mj1 = document.querySelector("#mj1");
    var mj2 = document.querySelector("#mj2");
    window.addEventListener("scroll", function () {
    });
    $(window).scroll(function () {
        var hT = $('#farts').offset().top,
            hH = $('#farts').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            mj2.classList.remove("dan2off");
            mj2.classList.add("dan2on");
            setTimeout(() => {
                mj1.classList.remove("dan1off");
                mj1.classList.add("dan1on");
            }, 2000);
        }
    });
})();
(function () {
    $('.carousel').carousel();
    $(".modal01").animatedModal();
    $(".modal03").animatedModal();
    $("#mastersof").animatedModal();
    $("#credits").animatedModal();
    $(".modal04").animatedModal();
    var x=document.querySelector("#topic");

document.querySelector("#SFC").addEventListener("click",function() {
    x.innerHTML="SSN Film Club";
    eventModule().start("SFC", ".m03", document.querySelector("#cardtemplate"));
});


document.querySelector("#SPC").addEventListener("click", function () {
    x.innerHTML = "SSN Photography Club";
    eventModule().start("SPC", ".m03", document.querySelector("#cardtemplate"));
});

document.querySelector("#DesignClub").addEventListener("click", function () {
    x.innerHTML = "Design Club";
    eventModule().start("DesignClub", ".m03", document.querySelector("#cardtemplate"));
});

document.querySelector("#farts").addEventListener("click", function () {
    x.innerHTML = "Fine Arts Club";
    eventModule().start("FineArtsClub", ".m03", document.querySelector("#cardtemplate"));
});

document.querySelector("#N2K").addEventListener("click", function () {
    x.innerHTML = "Dance Club";
    eventModule().start("N2K", ".m03", document.querySelector("#cardtemplate"));
});

document.querySelector("#LightsOutPlease").addEventListener("click", function () {
    x.innerHTML = "Lights Out Please";
    eventModule().start("LightsOutPlease", ".m03", document.querySelector("#cardtemplate"));
});

document.querySelector("#EnglishLiteraryClub").addEventListener("click", function () {
    x.innerHTML = "English Literary Club";
    eventModule().start("EnglishLiteraryClub", ".m03", document.querySelector("#cardtemplate"));
});

document.querySelector("#Saaral").addEventListener("click", function () {
    x.innerHTML = "தமிழ் சாரல் மன்றம்";
    eventModule().start("Saaral", ".m03", document.querySelector("#cardtemplate"));
});

document.querySelector("#SMC").addEventListener("click", function () {
    x.innerHTML = "SSN Music Club";
    eventModule().start("SMC", ".m03", document.querySelector("#cardtemplate"));
});

document.querySelector("#Quiz").addEventListener("click", function () {
    x.innerHTML = "Quiz Club";
    eventModule().start("Q!", ".m03", document.querySelector("#cardtemplate"));
});

document.querySelector("#busroutes").addEventListener("click", function () {
    x.innerHTML = "Accomodation & Busroutes";
    eventModule().start("busroutes", ".m03", document.querySelector("#cardtemplate"));
});

document.querySelector("#bus").addEventListener("click", function () {
    x.innerHTML = "Accomodation & Busroutes";
    eventModule().start("busroutes", ".m03", document.querySelector("#cardtemplate"));
});
  
    eventModule().start("VarietyClub", ".m01", document.querySelector("#cardtemplate"));
 

})();

(function () {
    $(function () {
        $('.material-card > .mc-btn-action').click(function () {
            var card = $(this).parent('.material-card');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');

            if (card.hasClass('mc-active')) {
                card.removeClass('mc-active');

                window.setTimeout(function () {
                    icon
                        .removeClass('fa-arrow-left')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-bars');

                }, 800);
            } else {
                card.addClass('mc-active');

                window.setTimeout(function () {
                    icon
                        .removeClass('fa-bars')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-arrow-left');

                }, 800);
            }
        });
    });
})();
(function () {
    var arr = document.querySelectorAll("a[class^='modal']");
    var gold = $("a[class^='modal']")[2].children[0].offsetTop;

    arr.forEach(function (data, i) {

        $(window).scroll(function () {
            var hT = $("a[class^='modal']")[i].children[0].offsetTop,
                hH = $("a[class^='modal']")[i].children[0].offsetHeight,
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS + wH / 2 > hT) {
                arr[i].children[0].classList.add("zoomIn07");
            }
            if (wS > hT) {
                arr[i].children[0].classList.remove("zoomIn07");
            }
            if (wS + wH / 2 < hT) {
                arr[i].children[0].classList.remove("zoomIn07");
            }
        });
    });

    $('.autoplay').slick({
        // slidesToShow: 3,
        // slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $("#aboutify").animatedModal();
    $("#aboutify3").animatedModal();


$(".core").animatedModal();
})();
