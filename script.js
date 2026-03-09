function closePopup(){
document.getElementById("welcomePopup").style.display="none";
}

/* music */

let music=document.getElementById("music");

function toggleMusic(){

if(music.paused){
music.play();
}else{
music.pause();
}

}
function startSurprise(){

document.getElementById("startScreen").style.display="none";

document.getElementById("mainContent").style.display="block";

document.getElementById("music").play();

}

/* typing letter */

let text="Happy Birthday My Love ❤️ You make my world brighter every day.";

let i=0;

function typeWriter(){

if(i<text.length){

document.getElementById("loveText").innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,50);

}

}

function openLetter(){

document.querySelector(".envelope").classList.add("open");

typeWriter();

fireworks();

}


/* slideshow */

let photos=["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg"];

let p=0;

setInterval(()=>{

p++;

if(p>=photos.length)p=0;

document.getElementById("slide").src=photos[p];

},2000);


/* floating hearts */



/* fireworks */

function fireworks(){

for(let i=0;i<40;i++){

let f=document.createElement("div");

f.className="fire";

f.style.background="hsl("+Math.random()*360+"deg,100%,50%)";

f.style.left=Math.random()*100+"vw";

f.style.top=Math.random()*100+"vh";

document.body.appendChild(f);

setTimeout(()=>f.remove(),2000);

}


function startPageHearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.classList.add("start-heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*3+2)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

},300);

}

startPageHearts();

}

function createStars(){

for(let i=0;i<60;i++){

let star=document.createElement("div");

star.classList.add("star");

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

document.body.appendChild(star);

}

}

createStars();


function createHeart(){

let heart = document.createElement("div");
heart.className = "floating-heart";
heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = (Math.random()*20 + 20) + "px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,500);