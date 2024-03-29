let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    section.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top < offset + height){
            // active navbar links
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }

    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100); //for scrolling changing the header  background color
    
// remove toggle icon and navbar when click navbar links (scroll)
menuIcon.classList.toggle('bx-x');
navbar.classList.remove('active');

}