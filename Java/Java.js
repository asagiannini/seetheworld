var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("text");
  var dots = document.getElementsByClassName("dot");
  if (n > 3) {slideIndex = 1}
  if (n < 1) {slideIndex = 3}
  for (i = 0; i < 3; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*onclick="fadebuttonsad()*/


function fadebuttonsad() {
  var i;
  var buttons2 = document.getElementsByClassName("guilty");
  for(i = 0; i < buttons2.length; i++) {
   buttons2[i].style.opacity=".3";
 }
 var buttons3 = document.getElementsByClassName("anxious");
 for(i = 0; i < buttons3.length; i++) {
  buttons3[i].style.opacity=".3";
}
var buttons4 = document.getElementsByClassName("scared");
for(i = 0; i < buttons4.length; i++) {
 buttons4[i].style.opacity=".3";
}
var buttons5 = document.getElementsByClassName("angry");
for(i = 0; i < buttons5.length; i++) {
 buttons5[i].style.opacity=".3";
}
var buttons1 = document.getElementsByClassName("sad");
for(i = 0; i < buttons1.length; i++) {
 buttons1[i].style.opacity="1";
}
}

function fadebuttonangry() {
  var i;
  var buttons2 = document.getElementsByClassName("guilty");
  for(i = 0; i < buttons2.length; i++) {
   buttons2[i].style.opacity=".3";
 }
 var buttons3 = document.getElementsByClassName("anxious");
 for(i = 0; i < buttons3.length; i++) {
  buttons3[i].style.opacity=".3";
}
var buttons4 = document.getElementsByClassName("scared");
for(i = 0; i < buttons4.length; i++) {
 buttons4[i].style.opacity=".3";
}
var buttons5 = document.getElementsByClassName("sad");
for(i = 0; i < buttons5.length; i++) {
 buttons5[i].style.opacity=".3";
}
var buttons1 = document.getElementsByClassName("angry");
for(i = 0; i < buttons1.length; i++) {
 buttons1[i].style.opacity="1";
}
}

function fadebuttonguilty() {
  var i;
  var buttons2 = document.getElementsByClassName("sad");
  for(i = 0; i < buttons2.length; i++) {
   buttons2[i].style.opacity=".3";
 }
 var buttons3 = document.getElementsByClassName("anxious");
 for(i = 0; i < buttons3.length; i++) {
  buttons3[i].style.opacity=".3";
}
var buttons4 = document.getElementsByClassName("scared");
for(i = 0; i < buttons4.length; i++) {
 buttons4[i].style.opacity=".3";
}
var buttons5 = document.getElementsByClassName("angry");
for(i = 0; i < buttons5.length; i++) {
 buttons5[i].style.opacity=".3";
}
var buttons1 = document.getElementsByClassName("guilty");
for(i = 0; i < buttons1.length; i++) {
 buttons1[i].style.opacity="1";
}
}

function fadebuttonanxious() {
  var i;
  var buttons2 = document.getElementsByClassName("sad");
  for(i = 0; i < buttons2.length; i++) {
   buttons2[i].style.opacity=".3";
 }
 var buttons3 = document.getElementsByClassName("guilty");
 for(i = 0; i < buttons3.length; i++) {
  buttons3[i].style.opacity=".3";
}
var buttons4 = document.getElementsByClassName("scared");
for(i = 0; i < buttons4.length; i++) {
 buttons4[i].style.opacity=".3";
}
var buttons5 = document.getElementsByClassName("angry");
for(i = 0; i < buttons5.length; i++) {
 buttons5[i].style.opacity=".3";
}
var buttons1 = document.getElementsByClassName("anxious");
for(i = 0; i < buttons1.length; i++) {
 buttons1[i].style.opacity="1";
}
}

function fadebuttonscared() {
  var i;
  var buttons2 = document.getElementsByClassName("sad");
  for(i = 0; i < buttons2.length; i++) {
   buttons2[i].style.opacity=".3";
 }
 var buttons3 = document.getElementsByClassName("guilty");
 for(i = 0; i < buttons3.length; i++) {
  buttons3[i].style.opacity=".3";
}
var buttons4 = document.getElementsByClassName("anxious");
for(i = 0; i < buttons4.length; i++) {
 buttons4[i].style.opacity=".3";
}
var buttons5 = document.getElementsByClassName("angry");
for(i = 0; i < buttons5.length; i++) {
 buttons5[i].style.opacity=".3";
}
var buttons1 = document.getElementsByClassName("scared");
for(i = 0; i < buttons1.length; i++) {
 buttons1[i].style.opacity="1";
}
}




function fadeout(){
    var myLinks2 = document.getElementsByClassName("dropdowncontent");
    myLinks2[0].style.display ="none";
}


function dropper2() {
  var myLinks = document.getElementsByClassName("dropdowncontent");
  var b1 = document.getElementsByClassName("sad");
  var b2 = document.getElementsByClassName("angry");
  var b3 = document.getElementsByClassName("scared");
  var b4 = document.getElementsByClassName("anxious");
  var b5 = document.getElementsByClassName("guilty");
  for(i = 0; i < b1.length; i++) {
    b1[i].style.opacity="1";
  }
  for(i = 0; i < b2.length; i++) {
    b2[i].style.opacity="1";
  }
  for(i = 0; i < b3.length; i++) {
    b3[i].style.opacity="1";
  }
  for(i = 0; i < b4.length; i++) {
    b4[i].style.opacity="1";
  }
  for(i = 0; i < b5.length; i++) {
    b5[i].style.opacity="1";
  }
  if (myLinks[0].style.display == "block") {
    myLinks[0].style.display = "none";
  }
  else {myLinks[0].style.display = "block";}
}
