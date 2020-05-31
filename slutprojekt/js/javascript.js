$("#wrapper1").css("display", "none");
$("#wrapper2").css("height", "90vh");
$("body").css("overflow", "hidden");
$("#wrapper2, #historypage, #albumpage, #mediapage").css("display", "none");
//$("#wrapper").click(function(){
//});


$(document).ready(function() { // fade in till sidan när den är redo.

  $("#wrapper1").fadeIn(1000);
});


$("#history, #career").click(function(){ //byt bild till biografi

  $("#wrapper1").fadeOut(1000);
  $("#wrapper2").delay(1000).fadeIn(1000);;
  $("#historypage").delay(800).fadeIn(1000);;

  console.log("to history");
});
$("#historypage").click(function(){//byt tillbaks till menyn

  $("#historypage").fadeOut(1000);
  $("#wrapper2").fadeOut(1000);
  $("#wrapper1").delay(800).fadeIn(500);

  console.log("to menu");
});


$("#album").click(function(){ //byt bild till album

  $("#wrapper1").fadeOut(1000);
  $("#wrapper2").delay(800).fadeIn(1000);;
  $("#albumpage").delay(800).fadeIn(1000);;

  console.log("to album");
});
$("#albumpage").click(function(){//byt tillbaks till menyn

  $("#albumpage").fadeOut(1000);
  $("#wrapper2").fadeOut(1000);
  $("#wrapper1").delay(800).fadeIn(500);

  console.log("to menu");
});


$("#media").click(function(){ //byt bild till album

  $("#wrapper1").fadeOut(1000);
  $("#wrapper2").delay(800).fadeIn(1000);;
  $("#mediapage").delay(800).fadeIn(1000);;

  console.log("to album");
});
$("#wrapper2").click(function(){//byt tillbaks till menyn

  $("#mediapage").fadeOut(1000);
  $("#wrapper2").fadeOut(1000);
  $("#wrapper1").delay(800).fadeIn(500);

  console.log("to menu");
});
