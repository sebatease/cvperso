
// bloquer les scripts en grand ecran
var y;
var source = document.getElementById("source");


function myFunction(x) {
  if (x.matches) { // If media query matches
    console.log('affiche les layers ta mère')
    y = true;
  } else {

    console.log('affiche pas les layers ta mère')
    y = false;
  }
  return y
}
var x = window.matchMedia("(max-width: 770px)");
myFunction(x) // Call listener function at run time
x.addListener(myFunction)// Attach listener function on state changes

// gestion affichage layer contact

var openContact = document.querySelector("#contactOpen");
var closeContact = document.querySelector("#contactClose");
var contactform = document.querySelector("#contactform");
var portrait = document.querySelector("#portrait");
//var x = window.matchMedia("(max-width: 770px)")


  openContact.addEventListener("click", function(){
    x.addListener(myFunction)
    if (y==true){
      contactform.classList.remove("disappear");
      contactform.classList.add("animate__fadeInDownBig");
      contactform.classList.remove("animate__fadeOutUpBig");
      portrait.classList.remove("bord_w");
      portrait.classList.add("bord_b");
    }})
  closeContact.addEventListener("click", function(){
    x.addListener(myFunction);
    if (y==true){
      contactform.classList.remove("animate__fadeInDownBig");
      contactform.classList.add("animate__fadeOutUpBig");
      portrait.classList.remove("bord_b");
      portrait.classList.add("bord_w");
    }})

// gestion affichage des elements

// var source = document.getElementById("source");
var SectTarg = source.getElementsByClassName("sect_cv");



  for (var i = 0; i < SectTarg.length; i++) {
    SectTarg[i].addEventListener("click", function() {
    x.addListener(myFunction)
    if (y==true){
      var current = document.getElementsByClassName("active");

      if (current.length > 0) {
        var CloseOpenDiv = current[0].querySelector(".animate__animated"); 
        current[0].className = current[0].className.replace(" active", "");
        CloseOpenDiv.classList.remove("appear");
        CloseOpenDiv.classList.remove("animate__FadeInLeft");
        CloseOpenDiv.classList.add("animate__FadeOutLeft");
        CloseOpenDiv.classList.add("disappear2");
      }
      this.className += " active";
      var OpenTheDiv = this.querySelector(".animate__animated");
      OpenTheDiv.classList.remove("disappear2");
      OpenTheDiv.classList.add("appear");
      OpenTheDiv.classList.add("animate__FadeInLeft");
      OpenTheDiv.classList.remove("animate__FadeOutLeft");
    
    }});  
  }





