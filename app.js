const parallax_el=document.querySelectorAll(".parallax");
const main = document.querySelector(".m");

let xValue=0,yValue=0,rotateDegree=0;
function update(cursorPosition){
    parallax_el.forEach(el => {
        let speedx=el.dataset.speedx;
        let speedy=el.dataset.speedy;
        let speedz=el.dataset.speedz;

        
        let isInLeft=(parseFloat(getComputedStyle(el).left))<(window.innerWidth /2) ? 1: -1;
        let zValue= (cursorPosition - parseFloat(getComputedStyle(el).left))*isInLeft*0.1;
        el.style.transform=`translateX(calc(-50% + ${-xValue * speedx}px)) rotateY(${rotateDegree}deg) translateY(calc(-50% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px)`;
    })
}

update();

window.addEventListener("mousemove",(e)=>{
    if(timeline.isActive()) return;

    xValue=e.clientX - window.innerWidth /2 ;
    yValue=e.clientY - window.innerHeight/2;

    rotateDegree=(xValue/ (window.innerWidth/2))*20;
    update(e.clientX)
});

if(window.innerWidth >= 725){
    main.style.maxHeight=`${window.innerWidth * 0.6}px`;
} else{
    main.style.maxHeight=`${window.innerWidth * 1.6}px`;
}
 
let timeline=gsap.timeline();

Array.from(parallax_el)
    .filter((el) => !el.classList.contains("text"))
    .forEach((el) => {
    timeline.from(el,{
        top:`${(el.offsetHeight / 2) + el.dataset.distance}px`,
        duration:1,
        ease:"power3.out",
    },
    "1"
    );
});
timeline.from(
    ".txt",
    {
    y:
        window.innerHeight - document.querySelector(".txt").getBoundingClientRect().top + 200,
        duration : 1 ,
    }, 
    "5.2"
)
timeline.from(
    ".text h1",
    {
    y:
        window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top + 200,
        duration : 2 ,
    }, 
    "2.5"
)
.from(
    ".text h2",
    {
        y:-150,
        opacity:0,
        duration:1.5,
    },
    "3"
)
.from(
    ".hide",
    {
        opacity:0,
        duration:1.5
    },
    "3"
);

var loader=document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display="none";

})

const button3 = document.querySelector('.b3');
const op3 = document.querySelector('.op3');
button3.addEventListener('mouseenter', () => {
    op3.style.zIndex = "200"; 
});
button3.addEventListener('mouseleave', () => {
    op3.style.zIndex = '16'; 
});

const button1 = document.querySelector('.b1');
const op1 = document.querySelector('.op1');
button1.addEventListener('mouseenter', () => {
    op1.style.zIndex = "200"; 
});
button1.addEventListener('mouseleave', () => {
    op1.style.zIndex = '17'; 
});

const button2 = document.querySelector('.b2');
const op2 = document.querySelector('.op2');
button2.addEventListener('mouseenter', () => {
    op2.style.zIndex = "200"; 
});
button2.addEventListener('mouseleave', () => {
    op2.style.zIndex = '11'; 
});
