$(document).ready(function ()
{
 const mobile = document .querySelector(".burger-btn");
 const mobileLink = document.querySelector(".nav-menus");

 mobile.addEventListener("click",function ()
 {
   mobile.classList.toggle("is-active");
   mobileLink.classList.toggle("active");
   }
 );

 mobileLink.addEventListener("click",function()
 {
  const menubars = document.querySelector("is-active");
  if(window.innerWidth<=768 && menubars)
{
  mobile.classList.toggle("is-active");
  mobileLink.classList.toggle("active");
}
}
 )
}
)