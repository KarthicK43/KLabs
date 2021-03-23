var linknav = document.querySelectorAll(".nav-link")
    for(var i=0;i<linknav.length;i++){
    linknav[i].addEventListener("click",()=>{
        for(var j=0;j<linknav.length;j++){
            linknav[j].classList.remove("active-cont");
        }
        this.document.activeElement.classList.add("active-cont");
    })
  }
  sizer()
  function sizer(){
      let navsize=document.getElementsByClassName("nav-item");
      if(window.innerWidth<800){
        for(var i=0;i<navsize.length;i++){
            navsize[i].style.width='100%';
        }
      }else{
        for(var i=0;i<navsize.length;i++){
            navsize[i].style.width='7vw';
        }
      }
  }
  setInterval(sizer,500)



