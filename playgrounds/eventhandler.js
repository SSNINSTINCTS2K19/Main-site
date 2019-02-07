let design = document.querySelector('#demo01');
let lop = document.querySelector('lop');

// document.querySelector("h1").style.display="block";

design.addEventListener('click', () => {
    fetch("./designclub.json").then(response => response.json())
        .then(
            
            d => {
                console.log(d)
                document.querySelector("#eventlist").innerHTML="";
                document.querySelector("#clubtitle").textContent = d.club
                d.events.forEach(element => {
                    var x = document.createElement('li');
                    x.textContent = element.title;
                    document.querySelector("#eventlist").appendChild(x);

                });
                console.log(d.events[0].description);
                document.querySelector("#description").textContent = d.events[0].description;
            })
})