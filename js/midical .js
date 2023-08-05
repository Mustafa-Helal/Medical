//==============================
// for Slidedown to classes js
//==============================


var goDown = document.querySelector(".down")
goDown.onclick =function sdown(){

window.scrollTo({
  top:80,
  behavior:"smooth"
});

}
var goDown2 = document.querySelector(".down2")
goDown2.onclick =function sdown(){

window.scrollTo({
  top:500,
  behavior:"smooth"
});

}
var goDown3 = document.querySelector(".down3")
goDown3.onclick =function sdown(){

window.scrollTo({
  top:1550,
  behavior:"smooth"
});

}

var goDown = document.querySelector(".down4")
goDown.onclick =function sdown(){

window.scrollTo({
  top:3100,
  behavior:"smooth"
});

}
var goDown2 = document.querySelector(".down5")
goDown2.onclick =function sdown(){

window.scrollTo({
  top:3100,
  behavior:"smooth"
});

}
var goDown3 = document.querySelector(".down6")
goDown3.onclick =function sdown(){

window.scrollTo({
  top:3700,
  behavior:"smooth"
});

}









var goUp = document.querySelector(".Up");

window.onscroll= function goTop(){
if(window.pageYOffset>100){
  goUp.style.display="block"
}
else{
  goUp.style.display="none"
}
}
goUp.onclick =function sTop(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}