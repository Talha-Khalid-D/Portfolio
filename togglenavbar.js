const navtogglerbtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
      navtogglerbtn.addEventListener("click",()=>{
        asidesectiontogglerbtn();
      })
      function asidesectiontogglerbtn(){
        aside.classList.toggle("open");
        navtogglerbtn.classList.toggle("open");
        for(let i = 0 ; i < totalsection;i++){
            allsection[i].classList.toggle("open");
        }
      }