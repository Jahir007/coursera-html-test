(function (window) {


var names = ["Jahir", "Khan", "Zishan", "Jay", "Paul", "Frank", "Larry", "Paula", "Laura", "loba"];


for (var i in names) {


  var firstLetter = ((names[i]).charAt(0)).toLowerCase();


  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);