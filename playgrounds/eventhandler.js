let design = document.querySelector('#design');
let lop = document.querySelector('lop');

// document.querySelector("h1").style.display="block";

design.addEventListener('click',()=>{
    fetch("./designclub.json").then(response => response.json())
    .then(
        d=>{console.log(d)
        document.querySelector("#clubtitle").textContent = d.club
        d.events.forEach(element => {
            var x = document.createElement('li');
            x.textContent=element.title;
            document.querySelector("#eventlist").appendChild(x);
        });
        })    
})