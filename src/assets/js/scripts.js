function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function display() {
  $("#detail").toggle();
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

function display(){
  openClose();
  display();
}
