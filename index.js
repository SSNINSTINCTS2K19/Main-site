(function () {
    document.querySelectorAll(".stars").forEach(e=>{
        e.addEventListener("click",listen);
    });
  function listen(event) {
      document.querySelector("div").innerHTML="";
      infor(event.target.textContent);
    }
  function infor(data){
    //   local storage 
      fetch(data+".json").then(function (response) { return response.json(); }).then(function (e) {
           console.log(e.head);
           e.events.forEach((d)=>{
               document.querySelector("div").innerHTML += "<p>" + d + "</p>"
           });
          
        })  
    }

})();