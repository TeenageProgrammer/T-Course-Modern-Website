let humburger = document.getElementById('humburger');
let navbarSlide = document.getElementById('navSlide');
let navOpen = true;

humburger.addEventListener('click',()=>{
    navbarSlide.classList.toggle('openNav');
    if (navOpen) {
        humburger.classList.remove('fa-bars');
        humburger.classList.add('fa-xmark');
        navOpen = false;
    }else{
        humburger.classList.add('fa-bars');
        humburger.classList.remove('fa-xmark');
        navOpen = true
    }
})


// Counting Numbers

let countingNumbers = document.querySelectorAll('.countNumber');
let speed = 1000;

let countNumbers = ()=>{
    countingNumbers.forEach(counter =>{
        const updateCount = ()=>{
            const target = +counter.getAttribute('data-val');
            const count = +counter.innerText;
            const inc = Math.ceil(target/speed);

            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount,1)
            }else{
                counter.innerText = target;
            }
        }
        updateCount()
    })

}

countNumbers()


// FAQ

let faqBoxes = document.querySelectorAll('.faqBox');

faqBoxes.forEach(elem =>{
    elem.addEventListener('click',()=>{
        elem.classList.toggle('open')
    })
})



// Reveal on scroll
window.addEventListener('scroll',reveal)

function reveal() {
        let reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 140;
            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active')
            }else{
                reveals[i].classList.remove('active')
            }
        }

        let countContainer = document.getElementById('countContainer');
        let windowHeight = window.innerHeight;
        let revealTop = countContainer.getBoundingClientRect().top;
        let revealPoint = 140;

        if (revealTop < windowHeight - revealPoint) {
            countNumbers();
        }else{
            countingNumbers.forEach(counter =>{
                counter.innerText = 0;
            })
        }
}


// Scroll To Div

let navigatingLinks = document.querySelectorAll('.navigatingLinks');

navigatingLinks.forEach(elem =>{
    let scrollTo = elem.getAttribute('data-val');

    elem.addEventListener('click',()=>{
        var element = document.getElementById(scrollTo);
        element.scrollIntoView({block:'start',behavior:'smooth'})
    })
})