/* =====================================
   TWINS BEAUTY SALON
   SCRIPT.JS PART 1
===================================== */





/* =====================================
   LOADER
===================================== */

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

},1200);

}

});







/* =====================================
   MOBILE MENU
===================================== */

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");


if(menuBtn && navLinks){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

menuBtn.innerHTML=

navLinks.classList.contains("active")

?

'<i class="fa-solid fa-xmark"></i>'

:

'<i class="fa-solid fa-bars"></i>';

});


document.querySelectorAll(".nav-links a")

.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

menuBtn.innerHTML=

'<i class="fa-solid fa-bars"></i>';

});

});

}








/* =====================================
   STICKY HEADER
===================================== */

const header =
document.querySelector("header");

if(header){

window.addEventListener("scroll",()=>{

header.classList.toggle(

"scrolled",

window.scrollY > 100

);

});

}









/* =====================================
   SCROLL REVEAL
===================================== */

const reveals =
document.querySelectorAll(".reveal");


function revealElements(){

reveals.forEach(item=>{

const top =

item.getBoundingClientRect().top;

if(top < window.innerHeight - 120){

item.classList.add("active");

}

});

}

window.addEventListener(

"scroll",

revealElements

);

revealElements();









/* =====================================
   COUNTER
===================================== */

const counters =
document.querySelectorAll(".counter");


if(counters.length > 0){

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target =

parseInt(counter.dataset.target);

let number = 0;

const speed = target / 100;


function update(){

if(number < target){

number += speed;

counter.innerText =

Math.ceil(number);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

}

update();

observer.unobserve(counter);

}

});

});

counters.forEach(counter=>{

observer.observe(counter);

});

}
/* =====================================
   SCRIPT.JS PART 2
===================================== */





/* =====================================
   SMOOTH SCROLL
===================================== */

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});








/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections =
document.querySelectorAll("section[id]");

const navItems =
document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{

let currentSection="";


sections.forEach(section=>{

const top =
section.offsetTop-150;

const height =
section.offsetHeight;


if(

window.scrollY>=top &&

window.scrollY<top+height

){

currentSection=section.id;

}

});


navItems.forEach(link=>{

link.classList.remove("active");

const href=
link.getAttribute("href");

if(href === `#${currentSection}`){

link.classList.add("active");

}

});

});









/* =====================================
   BACK TO TOP
===================================== */

const backTop =
document.createElement("button");

backTop.className="back-to-top";

backTop.innerHTML=

'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(backTop);


window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.classList.add("show");

}else{

backTop.classList.remove("show");

}

});


backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});









/* =====================================
   WHATSAPP ANIMATION
===================================== */

const whatsapp =
document.querySelector(".whatsapp");


if(whatsapp){

setInterval(()=>{

whatsapp.classList.toggle("pulse");

},1500);

}
/* =====================================
   SCRIPT.JS PART 3
===================================== */





/* =====================================
   GALLERY FILTER
===================================== */

const filterButtons =
document.querySelectorAll(".filter-btn");

const galleryItems =
document.querySelectorAll(".gallery-item");


if(filterButtons.length > 0){

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

const filter =
button.dataset.filter;


galleryItems.forEach(item=>{

const category =
item.dataset.category;


if(filter==="all" || filter===category){

item.style.display="block";

setTimeout(()=>{

item.style.opacity="1";
item.style.transform="scale(1)";

},100);

}else{

item.style.opacity="0";
item.style.transform="scale(.8)";

setTimeout(()=>{

item.style.display="none";

},300);

}

});

});

});

}









/* =====================================
   GALLERY LIGHTBOX
===================================== */

const lightbox =
document.querySelector(".lightbox");

const lightboxImg =
document.querySelector(".lightbox img");

const lightboxClose =
document.querySelector(".lightbox-close");

const galleryImages =
document.querySelectorAll(".gallery-item img");


if(lightbox && galleryImages.length > 0){

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImg.src=image.src;

lightboxImg.alt=image.alt;

});

});



lightboxClose.addEventListener("click",()=>{

lightbox.classList.remove("active");

});



lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

});



document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

lightbox.classList.remove("active");

}

});

}
/* =====================================
   SCRIPT.JS PART 4
===================================== */





/* =====================================
   APPOINTMENT FORM
===================================== */

const appointmentForm =
document.querySelector(".appointment-form");

if(appointmentForm){

appointmentForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
appointmentForm.querySelector(
'input[name="name"]'
)?.value.trim();

const phone =
appointmentForm.querySelector(
'input[name="phone"]'
)?.value.trim();

if(!name || !phone){

alert("Please fill in all required fields.");

return;

}

alert("Appointment booked successfully!");

appointmentForm.reset();

});

}








/* =====================================
   CONTACT FORM
===================================== */

const contactForm =
document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

const inputs =
contactForm.querySelectorAll(
"input, textarea"
);

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()===""){

valid=false;

}

});

if(!valid){

alert("Please complete all fields.");

return;

}

alert("Your message has been sent successfully!");

contactForm.reset();

});

}








/* =====================================
   NEWSLETTER FORM
===================================== */

const newsletterForm =
document.querySelector(".newsletter-form");

if(newsletterForm){

newsletterForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email =
newsletterForm.querySelector(
'input[type="email"]'
);

if(email && email.value.trim()!==""){

alert("Thank you for subscribing!");

newsletterForm.reset();

}else{

alert("Please enter your email address.");

}

});

}
/* =====================================
   HERO IMAGE SLIDER
===================================== */

const heroSlides =
document.querySelectorAll(".hero-slide");

if(heroSlides.length > 0){

let currentSlide = 0;

setInterval(()=>{

heroSlides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= heroSlides.length){

currentSlide = 0;

}

heroSlides[currentSlide].classList.add("active");

},5000);

}