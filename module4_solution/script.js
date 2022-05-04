(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(var i=0;i<(names.length);i++){
    var upper=names[i].charAt(0);
    var lower=upper.toLowerCase();
    if(upper=='J' || lower=='j'){
      
      byeSpeaker.speak(names[i]);
    }
    else{
      helloSpeaker.speak(names[i]);
    }
  }
})();
