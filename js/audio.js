/*********************************************LYD SCROLL DOWN *****************************************/ 

/**
 * fil: audio.js
 * purpose: play audio when the containing div is visible
 **/
window.addEventListener("scroll", function() { // detect scroll event

  var myaudio = document.getElementById("myaudio"); // select audio id
  var lyd = document.getElementById("lyd1");
  console.log("Er div #lyd synlig? " + elFllVsbl(lyd1)); // test

// Below: start and stop audio 
  if (elFllVsbl(lyd)) { // if the #lyd div is visible then
    if (!(myaudio.curentTime > 0)) {
      myaudio.play(); // play audio
    }
  } else {
   myaudio.pause();
    myaudio.currentTime = 0; // rewind the sound
  }
})

// this function will check whether a tag is visible
function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}

/*
NB: the audio / video tags will allways return true,
solution: place the tag in a div and test for the div in stead
*/




/***********************LYD SCROLL DOWN ******************************************************************/ 





/***loop**/
function myFunction() {
  var x = document.getElementById("myVideo").loop;
  document.getElementById("demo").innerHTML = x;
}

/****lydprøver****/





var hoverArea = document.getElementById('hoverElement');
	var audio = document.getElementById('audio');
	hoverArea.onmouseover= function(){
		audio.play();
	}
	hoverArea.onmouseout= function(){
		audio.pause();
	}















