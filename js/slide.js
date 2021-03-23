/*banner content-js*/
var myIndex = 0;
carousel();
function carousel() {
  var i;
  const x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > 4) {myIndex = 1}  

  x[myIndex-1].style.display = "block";
  

  setTimeout(carousel, 4000); // Change image every 3 seconds

}





