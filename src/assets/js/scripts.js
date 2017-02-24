function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openClose() {
    var width = document.getElementById("mySidenav").offsetWidth;
    // console.log(width);
    if (width == 0){
      this.openNav();
    } else {
      this.closeNav();
    }
}



function hideAll(){
  $(".recommendation").each(function(){
    $(this).hide();
  });
}


function displayDetail1(){
  openNav();
  hideAll();
  $( "#detail" ).show();
  // setTimeout(function(){$( "#detail" ).show(); }
  //   , 300);
}

function displayDetail2(){
  openNav();
  hideAll();
  // $( "#detail" ).show();
  setTimeout(function(){$( "#detail2" ).show(); }
    , 300);
}

function displayDetail3(){
  openNav();
  hideAll();
  // $( "#detail" ).show();
  setTimeout(function(){$( "#detail3" ).show(); }
    , 300);
}

function displayDetail4(){
  openNav();
  hideAll();
  // $( "#detail" ).show();
  setTimeout(function(){$( "#detail4" ).show(); }
    , 300);
}

function displayDetail5(){
  openNav();
  hideAll();
  // $( "#detail" ).show();
  setTimeout(function(){$( "#detail5" ).show(); }
    , 300);
}

function displayDetail6(){
  openNav();
  hideAll();
  // $( "#detail" ).show();
  setTimeout(function(){$( "#detail6" ).show(); }
    , 300);
}

function displayDetail7(){
  openNav();
  hideAll();
  // $( "#detail" ).show();
  setTimeout(function(){$( "#detail7" ).show(); }
    , 300);
}

function displaySlide3(){
  openNav();
  hideAll();
  $( "#detail3" ).show();
}
