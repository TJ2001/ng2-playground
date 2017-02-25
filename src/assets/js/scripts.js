function move(){
  if ($(".sideReference").hasClass("animate")){
      $(".sideReference").removeClass("animate");
  } else {
   $(".sideReference").addClass("animate");
  }
}

function hideAll(){
  $(".recommendation").each(function(){
    $(this).hide();
  });
}

function displayDetail1(){
  move();
  hideAll();
  $( "#detail" ).show();
  // setTimeout(function(){$( "#detail" ).show(); }
  //   , 300);
}

function displayDetail2(){
  move();
  hideAll();
  // $( "#detail" ).show();
  setTimeout(function(){$( "#detail2" ).show(); }
    , 300);
}

function displayDetail3(){
  move();
  hideAll();
  // $( "#detail" ).show();
  setTimeout(function(){$( "#detail3" ).show(); }
    , 300);
}

function displayDetail4(){
  move();
  hideAll();
  // $( "#detail" ).show();
  setTimeout(function(){$( "#detail4" ).show(); }
    , 300);
}

function displayDetail5(){
  move();
  hideAll();
  // $( "#detail" ).show();
  setTimeout(function(){$( "#detail5" ).show(); }
    , 300);
}

function displayDetail6(){
  move();
  hideAll();
  // $( "#detail" ).show();
  setTimeout(function(){$( "#detail6" ).show(); }
    , 300);
}

function displayDetail7(){
  move();
  hideAll();
  // $( "#detail" ).show();
  setTimeout(function(){$( "#detail7" ).show(); }
    , 300);
}

function displaySlide3(){
  move();
  hideAll();
  $( "#detail3" ).show();
}
