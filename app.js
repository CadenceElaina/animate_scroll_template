const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            //if observer isIntersecting -> add class -> shows the section
            entry.target.classList.add('show');
        } else {
            /*remove if not being viewed on screen - allows for animation each time
            a user scrolls over the section */
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)) //Observe all hidden elements

// API DiceBear Avatars https://avatars.dicebear.com/docs/http-api

/* fetch("https://avatars.dicebear.com/api/human/cadenceelaina.svg")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
    }); */
/*  add promise -> then -> catch
   .catch ((error) => {
    window.alert("Sorry gurrrrrrrrl is yo internet working?") */
/* }) */



// API for random quote
const quoteBlock = document.getElementById('quote')

fetch("https://type.fit/api/quotes")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let length = data.length
        let rand = Math.floor(Math.random() * length)
        let quote = data[rand];
        console.log(data[rand])
        quoteBlock.innerHTML = '"' + quote.text + '"' + '- ' + quote.author
    });

//Generate new quote on click
const btn = document.getElementById("btn")
btn.addEventListener('click', () => {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let length = data.length
            let rand = Math.floor(Math.random() * length)
            let quote = data[rand];
            console.log(data[rand])
            quoteBlock.innerHTML = '"' + quote.text + '"' + '- ' + quote.author
        });
})