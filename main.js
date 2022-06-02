const menuBtn= document.querySelector('#menu-btn');
const header= document.querySelector('header');
const btnTabs=document.querySelectorAll('.btn-cat');
const cats= document.querySelectorAll('.cat');
const navLinks= document.querySelectorAll('.link');

let homeOffset=document.getElementById('home').offsetTop;
let aboutOffset= document.getElementById('about').offsetTop-2*(header.getBoundingClientRect().height);
let skillOffset= document.getElementById('skill').offsetTop-2*(header.getBoundingClientRect().height);
let projectOffset= document.getElementById('project').offsetTop-2*(header.getBoundingClientRect().height);
let contactOffset= document.getElementById('contact').offsetTop-2*(header.getBoundingClientRect().height);


menuBtn.addEventListener('click', ()=>{
    header.classList.toggle('show-menu');
})

// Tab 
btnTabs.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        btnTabs.forEach((tab)=>{
            tab.classList.remove('active-btn-cat');
        })
        document.querySelectorAll('.cat').forEach((cat)=>{
            cat.classList.remove('active-cat');
        })
        
        btn.classList.add('active-btn-cat');
        cats[index].classList.add('active-cat');
    })
})



navLinks.forEach((link, index)=>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        let id=link.getAttribute('href').slice(1);
        let target=document.getElementById(id);
        let targetLoc= target.offsetTop;
        let headerHeight=header.getBoundingClientRect().height;
        
        if(header.classList.contains('show-menu')){
            header.classList.remove('show-menu');   
        }
        if(id=='home'){
            window.scrollTo({
                top: targetLoc,
                behavior: 'smooth',
            })
        }
        else{
            window.scrollTo({
                top: targetLoc-headerHeight,
                behavior: 'smooth',
            })
        }
        
        
    })
})

