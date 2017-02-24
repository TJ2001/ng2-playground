function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openClose() {
    var width = document.getElementById("mySidenav").offsetWidth;
    console.log(width);
    if (width == 0){
      this.openNav();
    } else {
      this.closeNav();
    }
}

function hideAll(){
  $("h4").each(function(){
    $(this).hide();
  });
}

function displaySlide1(){
  openNav();
  hideAll();
  $( "#detail" ).show();
}

function displaySlide2(){
  openNav();
  hideAll();
  $( "#detail2" ).show();
}

function displaySlide3(){
  openNav();
  hideAll();
  $( "#detail3" ).show();
}
