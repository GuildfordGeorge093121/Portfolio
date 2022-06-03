let homeOffset=document.getElementById('home').offsetTop;
let aboutOffset= document.getElementById('about').offsetTop-2*(header.getBoundingClientRect().height);
let skillOffset= document.getElementById('skill').offsetTop-2*(header.getBoundingClientRect().height);
let projectOffset= document.getElementById('project').offsetTop-2*(header.getBoundingClientRect().height);
let contactOffset= document.getElementById('contact').offsetTop-2*(header.getBoundingClientRect().height);

let scrollUpBtn= document.querySelector('.scroll-up-btn')

window.scrollTo({
    top: 0,
})
header.classList.remove('show-menu');
window.addEventListener('scroll',(e)=>{
    let navBtn=document.querySelectorAll('.nav-link');
    let trackbtn= document.querySelectorAll('.track');
    let target="home";
    if(window.scrollY>=homeOffset && window.scrollY<=aboutOffset){
        target='home';
    }
    else if(window.scrollY>=aboutOffset && window.scrollY<=skillOffset){
        target='about';
    }
    else if(window.scrollY>=skillOffset && window.scrollY<=projectOffset){
        target='skill';
    }
    else if(window.scrollY>=projectOffset && window.scrollY<=contactOffset){
        target='project';
    }
    else if(window.scrollY>=contactOffset){
        target='contact';
    }
    
    if(window.scrollY>2*(header.getBoundingClientRect().height)){
        scrollUpBtn.classList.add('active-scroll-up-btn');
    }
    if(window.scrollY<2*(header.getBoundingClientRect().height)){
        scrollUpBtn.classList.remove('active-scroll-up-btn');
    }
    trackbtn.forEach((btn)=>{
        btn.classList.remove('active-track');
    })
    navBtn.forEach((btn)=>{
        btn.classList.remove('active-nav');
    })
    navBtn.forEach((btn)=>{
        if(btn.getAttribute('href').includes(target)){
            btn.classList.add('active-nav');
        }
    })
    trackbtn.forEach((track)=>{
        if(track.getAttribute('href').includes(target)){
            track.classList.add('active-track');
        }
    })
})

