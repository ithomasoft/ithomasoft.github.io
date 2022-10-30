//页面的交互动效
var logo = document.querySelector(".logo");
logo.addEventListener("click",()=>{
    alert("点击了logo")
})



//底部footer显示当年年份
var footer = document.querySelector(".footer");
var currentYear = footer.querySelector("i");
document.addEventListener("DOMContentLoaded",()=>{
    currentYear.innerHTML=new Date().getFullYear();
})