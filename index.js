//localStorage.removeItem("SFC");
//localStorage.removeItem("ELC");

(function () {
    document.querySelectorAll(".stars").forEach(e=>{
        e.addEventListener("click",listen);
    });
  function listen(event) {
      document.querySelector("div").innerHTML="";
      infor(event.target.textContent);
    }
  function infor(data){
<<<<<<< HEAD
      if(localStorage.getItem(data)){
          console.log(199);
          let e = JSON.parse(localStorage.getItem(data));
          e.events.forEach((d) => {
              document.querySelector("div").innerHTML += "<p>" + d + "</p>"
          });
      }
      else{
=======
    //   local storage 
>>>>>>> e7089406ae0ba0e12052f3b737a4840ddfdbeb81
      fetch(data+".json").then(function (response) { return response.json(); }).then(function (e) {
          localStorage.setItem(e.head.toLowerCase(),JSON.stringify(e));
           console.log(e.head);
           e.events.forEach((d)=>{
               document.querySelector("div").innerHTML += "<p>" + d + "</p>"
            });
        });
     } 
    }
})();
