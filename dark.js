let fullDarkModeEl=document.getElementById("full");
let containedDarkModeEl=document.getElementById("contained-dark-mode")
let containerEl=document.getElementById("container");

const isfullDarkMode=JSON.parse(localStorage.getItem("fullDarkModeEl"));
const iscontainedDarkMode=JSON.parse(localStorage.getItem("containedDarkModeEl"));

if(isfullDarkMode){
   fullDarkModeEl.checked=true;
}
if(iscontainedDarkMode){
   containedDarkModeEl.checked=true;
}
   FullChangeDarkMode();
   changecantainedDarkMode();

fullDarkModeEl.addEventListener("click",()=>{
   FullChangeDarkMode();
   changecantainedDarkMode();
        
    })
  
    function FullChangeDarkMode(){
   if(fullDarkModeEl.checked)
      {
       document.body.classList.add("dark");
       localStorage.setItem("fullDarkModeEl",true);
      }
      else
      {
         document.body.classList.remove("dark");
         localStorage.setItem("fullDarkModeEl",false);
      }
      
}

  function changecantainedDarkMode(){
   
   if(containedDarkModeEl.checked)
      {
         containerEl.classList.add("dark");
         localStorage.setItem("containedDarkModeEl",true);
      }
      else{
         containerEl.classList.remove("dark");
         localStorage.setItem("containedDarkModeEl",false);
      }
  }
   
  containedDarkModeEl.addEventListener("click",changecantainedDarkMode);

   
   
  
   
      


   
 



