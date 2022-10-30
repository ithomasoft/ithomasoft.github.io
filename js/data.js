var siderData = JSON.parse('[{"key":"0","value":"常用推荐"},{"key":"1","value":"软件开发"},{"key":"2","value":"平面设计"},{"key":"3","value":"产品经理"},{"key":"4","value":"生活百态"},{"key":"5","value":"副业搞钱"},{"key":"6","value":"平台工具"},{"key":"7","value":"极客资源"},{"key":"8","value":"成长之路"}]');

var sider = document.querySelector(".sider");
var ul = sider.querySelector("ul");

var content = document.querySelector(".content");
var category = content.querySelectorAll(".item");

document.addEventListener("DOMContentLoaded", () => {

    for (let i = 0; i < siderData.length; i++) {
        var li = document.createElement("li");
        var txt = document.createTextNode(siderData[i].value);
        li.appendChild(txt);
        ul.appendChild(li);
        category[i].querySelector("h4").innerHTML=siderData[i].value;
    };

    var list = ul.querySelectorAll("li");

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click",function(){
            
        for (let j = 0; j < list.length; j++) {
            list[j].style.backgroundColor = "transparent";
        };
       this.style.backgroundColor = "white";
       //TODO 添加主体滑动事件
       var categoryItem =category[i];
    
       window.scrollBy(0,categoryItem.getBoundingClientRect().top-document.querySelector(".header").clientHeight-24)
      
      });
    };

    ul.querySelector("li").style.backgroundColor = "white";

})

