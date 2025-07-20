const cancel = document.querySelector("#cancel")
const firstsection  = document.querySelector(".firstsection")
cancel.addEventListener("click",()=>{
    firstsection.style.display='none'
})
let sidenav = document.getElementById("side-nav")
const menuicon = document.getElementById("menuicon")
menuicon.addEventListener("click",()=>{
  sidenav.style.left="0%"
})
const sidecancel = document.getElementById("side-cancel")
sidecancel.addEventListener("click",()=>{
  sidenav.style.left = "-40%"
})


var slideleft = document.getElementById("slide-left")
var slideright =document.getElementById("slide-right")
var slide_img= document.querySelector(".slide_img")
var slidermargin=0


slideright.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        slide_img.style.marginLeft=0;
    }
    else{
        slide_img.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

slideleft.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        slide_img.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    slide_img.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)

const hearts = document.querySelectorAll(".heart")
hearts.forEach(btn =>{
btn.addEventListener("click",()=>{
   if(btn.src.includes("/Assets/redheart.png"))
      btn.src =  btn.src="./Assets/blackheart.png"
  else{
    btn.src =  btn.src="./Assets/redheart.png"
  }
})
})
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".initial-scroll-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-scroll-animate");
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
});
